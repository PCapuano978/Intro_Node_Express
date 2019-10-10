const express = require('express');
const app = express();
const fs = require('fs');
const port = 8080;
app.use(express.static(__dirname));

app.listen(port, () => console.log('Server listening on localhost:%s'), port);

app.use('/', (req, res) => res.use('<h2>Hello from the server endpoint!</h2>'));