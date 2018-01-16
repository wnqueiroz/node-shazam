var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

http.listen(3000, '0.0.0.0', function(){
    console.log('Server is Running');
});