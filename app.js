var express = require('express');
var app = express();

app.get('/produtos', function(req, res){
    res.send('<html><body><h1>Listagem de produtos</h1></body></html>')
});

app.listen(3000, function(){
    console.log('Server is Running');
});