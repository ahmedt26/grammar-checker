import * as builder from 'annotatedtext-remark';
import express from 'express'
import bodyParser from 'body-parser'

const app = express();  
const port = 3000;
const jsonParser = bodyParser.json()

// Use an annotated-text library in order to annotate our markdown text properly which can then be used to check for grammar mistakes
app.post('/annotate_markdown', jsonParser, (req, res) => {
    res.send(JSON.stringify(builder.build(req.body.markdown)))
});

// The port the application is listening on.
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});