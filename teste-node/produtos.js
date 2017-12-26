var http = require('http');

http.createServer(function(request,response){
    if(request.url =="/produtos"){
      response.end("<html><body>listando os produtos da loja</body>");
    } else {
      response.end("<html><body>home da casa do codigo</body></html>");
    }
}).listen(3000,"localhost");

console.log("servidor está rodando");