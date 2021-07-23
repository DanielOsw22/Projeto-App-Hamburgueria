class Tabelas {
    funcionarios = ("CREATE TABLE if not exists Funcionarios(CPF Varchar(11) PRIMARY KEY not null, Nome text not null, Cargo Varchar(80), Endereço Varchar(150))")
}

module.exports = Tabelas;