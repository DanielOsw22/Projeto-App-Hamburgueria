const mFuncionarios = require("../models/mFuncionarios");

module.exports = app => {
    app.get("/funcionarios", (req, res) => {
        mFuncionarios.lista(res);
    })

    app.post("/funcionarios", (req, res) => {
        const cadastro = req.body;
        mFuncionarios.inserir(cadastro, res);
    })

    app.delete("/funcionarios/:CPF", (req, res) => {
        const cadastro = parseInt(req.params.CPF);
        mFuncionarios.delete(cadastro, res)
    })

    app.put("/funcionarios/:CPF", (req, res) => {
        const att = req.body;
        const seleciona = parseInt(req.params.CPF);
        mFuncionarios.atualizar(att, seleciona, res);
    })
}