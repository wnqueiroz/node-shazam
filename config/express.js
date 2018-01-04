var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

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

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
};
