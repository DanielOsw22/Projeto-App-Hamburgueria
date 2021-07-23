const Produtos = require('../models/mProdutos')

class cProdutos {
    async listar (res) {
        const result = await Produtos.findAll()
        res.status(200).json(result)
    }

    async buscar (req,res) {
        const {ID_produto} = req.body
        const result = await Produtos.findAll({
            where: {
                ID_produto: ID_produto
            }
        })
        res.status(200).json(result)
    }
    
    async cadastrar (req,res) {
        const {descricao, preco, quantidade, ID_fornecedor} = req.body
        const novoProd = await Produtos.create({descricao, preco, quantidade, ID_fornecedor})
        res.status(201).json(novoProd)
    }

    async deletar (req,res) {
        const {ID_produto} = req.body
        const result = await Produtos.destroy({
            where: {
                ID_produto: ID_produto
            }
        })
        res.status(200).json(ID_produto)
    }

    async atualizar (req,res) {
        const {ID_produto, descricao, preco,quantidade,ID_fornecedor} = req.body
        const result = await Produtos.update({
            descricao, preco, quantidade, ID_fornecedor
        },{
            where:{
                ID_produto
            }
        })
        res.status(200).json(ID_produto)
    }

    async deletaTab (res) {
        const result = await Produtos.drop()
        res.status(200).json(result)
    }
}

module.exports = new cProdutos