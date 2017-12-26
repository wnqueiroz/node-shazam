module.exports = function(app){
    app.get('/produtos', function(req, res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo'
        });

        connection.query('SELECT * FROM livros', function(err, results){
            res.render('produtos/lista', {
                lista: results
            });            
        });

        connection.end();

    });
    return app;
}