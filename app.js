var app = require('./config/express')();

app.listen(3000, '0.0.0.0', function(){
    console.log('Server is Running');
});