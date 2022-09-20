const express = require("express");
const path = require("path");
const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(5000, () => {
    console.log('listening on *:5000');
});