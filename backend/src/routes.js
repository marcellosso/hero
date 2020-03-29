const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    return res.json({
        evento: 'Omni 11.0',
        aluno: 'Marcel'
    })
});

module.exports = routes;
