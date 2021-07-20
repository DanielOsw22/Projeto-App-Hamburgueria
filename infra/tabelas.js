class Tabelas {
    produtos = 'CREATE TABLE IF NOT EXISTS produtos (ID_produto INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, descricao varchar(200) NOT NULL, preco real not null, quantidade integer not null, ID_fornecedor integer)'
}

module.exports = new Tabelas