module.exports = function (app) {

    app.get("/produtos", function (req, res, next) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            if (err) {
                return next(err);
            }
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
            errorsValidation: {},
            produto: {}
        });
    });

    app.post("/produtos", function (req, res) {

        var produto = req.body;

        req.assert('titulo', 'O Título do produto é obrigatório!').notEmpty();
        req.assert('preco', 'Formato de preço inválido!').isFloat();

        var errors = req.validationErrors();

        if (errors) {

            res.format({
                html: function () {
                    res.status(400).render('produtos/form', {
                        errorsValidation: errors,
                        produto: produto
                    });
                },
                json: function () {
                    res.status(400).json(errors);
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function (err, results) {
            res.redirect('/produtos');
        });

        connection.end();

    });

};