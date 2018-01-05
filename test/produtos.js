var http = require('http'),
    assert = require('assert');

describe('ProdutosController', function () {
    it('#listagem em JSON', function (done) {

        var configs = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(configs, function (res) {
            assert.equal(res.statusCode, 200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
        });
    });
});