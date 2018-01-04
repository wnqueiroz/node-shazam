var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // middleware para passar a converter e utilizar os dados enviados via POST
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // middleware para passar a converter e utilizar os dados enviados com o formato JSON
    app.use(bodyParser.json());

    // middleware para informar o uso do express-validator
    app.use(expressValidator());

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};
