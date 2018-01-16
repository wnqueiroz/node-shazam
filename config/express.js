var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
    var app = express();
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    // middleware para a definição de recursos estáticos da aplicação 
    app.use(express.static('./app/public'));

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
    
    // middleware customizado para página de erro 404
    app.use((req, res,next) => {
        res.status(404).render('erros/404');    
        next();
    });
    
    // middleware customizado para páginas de erros no servidor
    app.use((error, req, res,next) => {
        if (process.env.NODE_ENV == 'production') {
            res.status(500).render('erros/500');
            return;
        }
        next(error);
    });

    return app;
};
