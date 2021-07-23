class Tabela {
    Fornecedor = 'CREATE TABLE IF NOT EXISTS Fornecedor (Id_fornecedor INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome varchar(200) NOT NULL, CNPJ varchar(200) NOT NULL, telefone varchar(25) NOT NULL)'
}
module.exports = Tabela;