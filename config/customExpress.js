const express = require('express')
const consign = require('consign')
const path = require('path')
const cors = require('cors')

module.exports = () => {
    const app = express()
    const pRouter = require('../routes/rProdutos') 
    const fRouter = require('../routes/rFuncionarios') 
    const fornRouter = require('../routes/rFornecedores')
    const pedRouter = require('../routes/rPedidos')
    const cRouter = require('../routes/rClientes')

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use(express.static('public'));  

    app.use('/produto',pRouter)
    app.use('/funcionario',fRouter)
    app.use('/fornecedor',fornRouter)
    app.use('/pedido',pedRouter)
    app.use('/cliente',cRouter)
    app.use(cors())


    return app
}
