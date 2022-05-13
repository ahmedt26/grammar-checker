from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import requests
import language_tool_python
import json 

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Monkey patch for languagetool to use AnnotatedText instead of plain text
def create_params(self, text):
    params = {'language': str(self.language), 'data': text}
    return params

language_tool_python.LanguageTool._create_params = create_params
tool = language_tool_python.LanguageTool('en-US')

# Create POST request that initializes annotated markdown text and return a json object with all the error messages along with their offset position and error length
@app.route('/check', methods=['POST'])
@cross_origin()
def check_markdown_grammar():
    markdown = request.json.get('markdown')
    annotated_text = annotate_text(markdown)
    return json.dumps([{
        'offset': match.offset,
        'errorLength': match.errorLength,
        'message': match.message
    } for match in tool.check(annotated_text)
    if match.context[match.offsetInContext+1] != '`']) # avoid marking errors surrounding code

# Annotates the markdown text by sending a request to our markdown parser server
def annotate_text(markdown: str) -> str:
    url = 'http://localhost:3000/annotate_markdown'
    body = {'markdown': markdown}
    request = requests.post(url, json=body)
    return request.text