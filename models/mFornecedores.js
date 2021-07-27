const {Sequelize, DataTypes} = require('sequelize')
const db = require('../infra/dbSqlite')

const Fornecedores = db.define('fornecedores',{
    ID_fornecedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    CNPJ: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(25),
        allowNull: false,
    }
})

async function criarTabelas(){
    await Fornecedores.sync()
}
criarTabelas()

module.exports = Fornecedores