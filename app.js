const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my 1st project and 2nd project'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
