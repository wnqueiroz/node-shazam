module.exports = (app) =>{
    app.get('/promocoes/form', (req, res) => {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {         
            res.render('promocoes/form', {lista: results});
        });

        connection.end();
    });

    app.post('/promocoes', (req, res) => {
        console.log(req.body);
        res.redirect('promocoes/form');
    });
};