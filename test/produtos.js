var http = require('http');

describe('ProdutosController', function () {
    it('#Listagem JSON', function (done) {

        var configs = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(configs, function (res) {


            if (res.statusCode === 200) {
                console.log(`\tStatus Code:  OK!`);
            }
            if (res.headers['content-type'] === 'application/json; charset=utf-8') {
                console.log(`\tContent-Type:  OK!`);
            }
            done();
        });
    });
});