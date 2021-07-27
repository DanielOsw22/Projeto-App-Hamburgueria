const {Sequelize, DataTypes} = require('sequelize')
const db = require('../infra/dbSqlite')

const Pedidos = db.define('pedidos',{
    ID_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    cpf_func: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    itens: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    ID_cliente:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

async function criarTabelas(){
    await Pedidos.sync()
}
criarTabelas()

module.exports = Pedidos