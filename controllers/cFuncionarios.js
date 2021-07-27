const Funcionarios = require('../models/mFuncionarios')
const path = require('path')
const __dirname2 = path.resolve(path.dirname(""))

class cFuncionarios {
    async lista (res) {
        const result = await Funcionarios.findAll()
        res.status(200).json(result)
    }
    
    async inserir (req,res) {
        const cadastro = req.body
        const novoProd = await Funcionarios.create(cadastro)
        res.status(201).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async delete (req,res) {
        const {CPF} = req.body
        const result = await Funcionarios.destroy({
            where: {
                CPF: CPF
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }

    async atualizar (req,res) {
        const {CPF, nome, cargo,endereco} = req.body
        const result = await Funcionarios.update({
            nome, cargo, endereco
        },{
            where:{
                CPF
            }
        })
        res.status(200).sendFile(__dirname2+"/public/views/Sucesso.html")
    }
}

module.exports = new cFuncionarios