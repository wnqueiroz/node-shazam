var mysql = require('mysql');

function createDBConnection() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo'
        });
    }
    if (process.env.NODE_ENV == 'test') {

        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_test'
        });
    }
}

// wrapper
module.exports = function () {
    return createDBConnection;
};