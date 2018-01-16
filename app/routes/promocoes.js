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
        var promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('promocoes/form');
    });
};