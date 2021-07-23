const model = require('../model/fornecedormodel');

module.exports = app => {
    app.get("/fornecedor",(req, res) => {
        model.selecao(res)
    })
    app.post("/fornecedor", (req, res) => {
        const inserir = req.body;
        model.insert(inserir, res)
    })
    app.delete("/fornecedor/:Id", (req, res) =>{
        const deletar = parseInt(req.params.Id);
        model.delete(deletar, res)
    })
    app.put("/fornecedor/:Id", (req,res) =>{
        const atualizar = req.body;
        const selecionar = parseInt(req.params.Id);
        model.update(atualizar, selecionar, res)
    })
}

