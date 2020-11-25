const express = require("express");
const helmet = require("helmet");

module.exports = function (app) {
    // middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(helmet());

    app.get('/', (req, res) => {
        res.status(200).json({greeting: 'Hello world in JSON'})
    });
}
