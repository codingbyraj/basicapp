const express = require('express');
const cors = require('cors');
const path = require('path');
const config = require('./config/config');

const app = express();

app.use(cors({
    origin: config.frontend_origin
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(config.port, () => console.log('server starts'));