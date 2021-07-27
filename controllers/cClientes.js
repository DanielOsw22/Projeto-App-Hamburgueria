const Clientes = require('../models/mClientes')
const path = require('path')
const __dirname2 = path.resolve(path.dirname(""))

class cClientes {
    async verClientes (res) {
        const result = await Clientes.findAll()
        res.status(200).json(result)
    }
    
    async adicionarClientes (req,res) {
        const cadastro = req.body
        const novoProd = await Clientes.create(cadastro)
        res.status(201).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async deletarClientes (req,res) {
        const {cliente_ID} = req.body
        const result = await Clientes.destroy({
            where: {
                cliente_ID
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async AtualizaClientes (req,res) {
        const {cliente_ID, nome, cep, numerores, telefone} = req.body
        const result = await Clientes.update({
            nome, cep, numerores, telefone
        },{
            where:{
                cliente_ID
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }
}

module.exports = new cClientes