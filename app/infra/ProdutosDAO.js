function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from produtos', callback);
};

ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('INSERT INTO produtos SET ?', produto, callback);
};

module.exports = function () {
    return ProdutosDAO;
};