class Tabelas {
    produtos = 'CREATE TABLE IF NOT EXISTS produtos (ID_fornecedor INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, descricao varchar(200) NOT NULL, preco real not null, quantidade integer not null)'
}

module.exports = new Tabelas