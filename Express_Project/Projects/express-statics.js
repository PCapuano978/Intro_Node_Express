const express = require('express');
var app = express();
var port = 8080;

app.listen(port, () => console.log('Server listening on localhost:%s', port));