/* Simulando uma requisição através de um cliente Android */

var http = require('http');

var configs = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

var client = http.request(configs, function (res) {

    console.log(`Status Code:  ${res.statusCode}`);

    // Ao obter os dados no corpo da resposta
    res.on('data', function (body) {
        console.log(`Data:  ${body}`);
    });
});

var produto = {
    titulo: 'mais sobre node',
    descricao: 'node, javascript e um pouco sobre http',
    preco: 100
};

client.end(JSON.stringify(produto));