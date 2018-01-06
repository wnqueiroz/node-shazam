var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function () {
    it('#listagem em JSON', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});