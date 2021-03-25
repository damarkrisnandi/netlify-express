const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/api/', (req, res) => {
    res.json({
        "hello": "hi"
    })
});

router.get('/api/test', (req, res) => {
    res.json({
        "hello": "ini adalah test"
    })
});

app.use('/', router);


module.exports.handler = serverless(app);