const Pedidos = require('../models/mPedidos')
const path = require('path')
const __dirname2 = path.resolve(path.dirname(""))

class cPedidos {
    async lista (res) {
        const result = await Pedidos.findAll()
        res.status(200).json(result)
    }
    
    async postar (req,res) {
        const pedido = req.body
        const novoPed = await Pedidos.create(pedido)
        res.status(201).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async exclusao (req,res) {
        const {ID_pedido} = req.body
        const result = await Pedidos.destroy({
            where: {
                ID_pedido
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async atualiza (req,res) {
        const {ID_pedido,cpf_func, itens, valor,ID_cliente} = req.body
        const result = await Pedidos.update({
            cpf_func, itens, valor, ID_cliente
        },{
            where:{
                ID_pedido
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }
}

module.exports = new cPedidos