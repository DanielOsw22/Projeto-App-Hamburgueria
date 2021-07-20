const Produtos = require('../models/mClientes')

module.exports = app => {
    app.get('/produto',(req, res) => {
        Produtos.listar(res)
    })

    app.get('/produto/:id',(req, res) => {
        const id = parseInt(req.params.id)
        Produtos.buscar(id,res)
    })

    app.post('/produto',(req,res)=>{
        const cadastro = req.body
        Produtos.cadastrar(cadastro, res)
    })

    app.delete('/produto/:id',(req,res)=>{
        const id = parseInt(req.params.id)
        Produtos.deletar(id, res)
    })

    app.patch('/produto/:id', (req,res)=>{
        const id = parseInt(req.params.id)
        const atualizacao = req.body
        Produtos.atualizar(id, atualizacao, res)
    })
}