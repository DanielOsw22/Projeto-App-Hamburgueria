const {Sequelize, DataTypes} = require('sequelize')
const db = require('../infra/dbSqlite')

const Clientes = db.define('clientes',{
    cliente_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    cep: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    numerores: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(64),
        allowNull: false,
    }
})

async function criarTabelas(){
    await Clientes.sync()
}
criarTabelas()

module.exports = Clientes