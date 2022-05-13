define([
	'require',
	'jquery',
	'base/js/namespace',
	'notebook/js/textcell',
], function (
	requirejs,
	$,
	Jupyter,
	textcell,
) {
    var enabled = true
    var textCells = []

    // On load we toggle the grammar checking button to on and take all cells and take off all error marks for each time it is toggled on or off
    $(document).ready(() => {
        $('#grammarchecker_btn').toggleClass('active', enabled)
        checkCells()
    })
    
    function checkCells() {
        Jupyter.notebook.get_cells().forEach(function (cell, idx, array) {  
            if (cell instanceof textcell.TextCell) {
                // check for any new cells
                if (!textCells.includes(cell)) {
                    // create empty erray to store error markings
                    cell.code_mirror.errorMarks = []
                    /// check grammar for the new cell
                    checkGrammar(cell.code_mirror)
                    // add on change event handler
                    cell.code_mirror.on("change", _.throttle(editor => checkGrammar(editor), 300, {
                        leading: false,
                        trailing: true
                    }));
                    textCells.push(cell)
                }
            }
        })
        setTimeout(checkCells, 500)
    }

    // Extension button that has all properties defined with icon and handler
    function grammarCheckButton() {
        $(Jupyter.toolbar.add_buttons_group([
            Jupyter.keyboard_manager.actions.register ({
                'help' : 'Toggle grammar checker',
                'icon' : 'fa-check',
                'handler' : toggleGrammarCheck,
            }, 'toggle-grammarchecking', 'Grammar Checker')
        ])).find('.btn').attr('id', 'grammarchecker_btn');
    }

    // Toggle for the extension which either clears all the error marks from all cells or checks all cells for grammar mistakes
    function toggleGrammarCheck() {
        enabled = !enabled;
        textCells = []
        $('#grammarchecker_btn').toggleClass('active', enabled);
        if (!enabled) {
            clearAllCells()
        }
    }

    // Creates a POST request on the text inside of a markdown cell and passes it through the open source grammar checker that is hosted locally 
    function checkGrammar(editor) {
        if (!enabled) {
            return;
        }
        clearMarks(editor.errorMarks)
        fetch('http://localhost:5000/check', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ markdown: editor.getValue() })
        }).then(res => {
            res.json().then(data => {
                data.forEach(error => {
                    // Takes the offset position of the error which is used to mark the error text
                    start = editor.doc.posFromIndex(error.offset)
                    end = editor.doc.posFromIndex(error.offset + error.errorLength)
                    // Depending on the type of error we label it as a spelling or grammar error in order to get the correct styling for both 
                    errorType = error.message.search("spelling") == -1 ? 'grammar-error' : 'spelling-error'
                    editor.errorMarks.push(editor.markText(start, end, { 
                        attributes: { 'data-text': '(' + error.message + ')' }, 
                        className: 'error-tooltip ' + errorType}))
                })
            })
        })
    }

    // Clears all error marks from every text cell
    function clearAllCells() {
        Jupyter.notebook.get_cells().forEach(function (cell, idx, array) {
            if (cell instanceof textcell.TextCell) {
                clearMarks(cell.code_mirror.errorMarks)
            }
        })
    }

    // Clears the error marks for a single cell
    function clearMarks(marks) {
        marks.forEach(mark => mark.clear())
        marks = []
    }

    // Function to load style sheet from main.css
    function addCss(url) {
        return $('<link/>').attr({
            type : 'text/css',
            rel : 'stylesheet',
            href : requirejs.toUrl(url)
        }).appendTo('head');
    }

    function load_ipython_extension() {
        addCss('./main.css');
        grammarCheckButton();
    }

    return {
        load_ipython_extension: load_ipython_extension
    }
});