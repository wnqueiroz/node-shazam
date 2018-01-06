var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function () {

    beforeEach(function (done) {
        var connection = express.infra.connectionFactory();
        connection.query("DELETE FROM produtos", function (ex, results) {
            if (!ex) {
                return done(ex);
            }
        });
    });

    it('#listagem em JSON', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('#cadastro de novo produto com dados INVÁLIDOS', function (done) {
        request.post('/produtos')
            .send({
                titulo: "",
                descricao: "fooo"
            })
            .expect(400, done);
    });
    it('#cadastro de novo produto com dados VÁLIDOS', function (done) {
        request.post('/produtos')
            .send({
                titulo: "foo",
                descricao: "bar",
                preco: 152.36
            })
            .expect(302, done);
    });
});