const {Sequelize, DataTypes} = require('sequelize')
const db = require('../infra/dbSqlite')

const Produtos = db.define('produtos',{
    ID_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ID_fornecedor:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

async function criarProduto(){
    await Produtos.sync()
}
criarProduto()

module.exports = Produtos