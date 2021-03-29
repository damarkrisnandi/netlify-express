const express = require('express');

const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/:id', (req, res) => {
// Code goes here
    res.json({
        hello: "hi", id: req.params.id
    })
});

// app.use(bodyParser.json());
app.use('/api/', router); 

// app.use('/.netlify/functions/api/', router);



module.exports.handler = serverless(app);