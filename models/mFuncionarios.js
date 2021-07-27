const {Sequelize, DataTypes} = require('sequelize')
const db = require('../infra/dbSqlite')

const Funcionarios = db.define('funcionarios',{
    CPF: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },  
    cargo: {
        type: DataTypes.STRING(80),
        allowNull: true,
    },
    endereco: {
        type: DataTypes.STRING(200),
        allowNull: true,
    }
})

async function criarTabelas(){
    await Funcionarios.sync()
}
criarTabelas()

module.exports = Funcionarios