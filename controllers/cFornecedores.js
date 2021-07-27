const Fornecedores = require('../models/mFornecedores')
const path = require('path')
const __dirname2 = path.resolve(path.dirname(""))

class cFornecedores {
    async selecao (res) {
        const result = await Fornecedores.findAll()
        res.status(200).json(result)
    }
    
    async insert (req,res) {
        const cadastro = req.body
        const novoProd = await Fornecedores.create(cadastro)
        res.status(201).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async delete (req,res) {
        const {CPF} = req.body
        const result = await Fornecedores.destroy({
            where: {
                CPF: CPF
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async update (req,res) {
        const {CPF, nome, cargo,endereco} = req.body
        const result = await Fornecedores.update({
            nome, cargo, endereco
        },{
            where:{
                CPF
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }
}

module.exports = new cFornecedores