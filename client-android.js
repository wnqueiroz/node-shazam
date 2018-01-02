/* Simulando uma requisição através de um cliente Android */

var http = require('http');

var configs = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(configs, function (res) {

    console.log(`Status Code:  ${res.statusCode}`);

    // Ao obter os dados no corpo da resposta
    res.on('data', function (body) {
        console.log(`Data:  ${body}`);
    });
});