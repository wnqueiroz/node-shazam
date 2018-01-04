module.exports = function (app) {

    app.get("/produtos", function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            res.format({
                html: function () {
                    res.render('produtos/lista', {lista: results});
                },
                json: function () {
                    res.json(results);
                }
            });
        });

        connection.end();
    });

    app.get("/produtos/form", function (req, res) {
        res.render('produtos/form', {
            errorsValidation: {}
        });
    });

    app.post("/produtos", function (req, res) {

        var produto = req.body;

        req.assert('titulo', 'O Título do produto é obrigatório!').notEmpty();
        req.assert('preco', 'Formato de preço inválido!').isFloat();

        var errors = req.validationErrors();

        if (errors) {
            return res.render('produtos/form', {
                errorsValidation: errors
            });
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function (err, results) {
            res.redirect('/produtos');
        });

    });

};