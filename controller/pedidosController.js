const PedidosModel = require('../model/pedidosModel')

module.exports = app =>{
    app.get('/pedidos', (req, res) => {
        PedidosModel.lista(res)
    });

    app.post('/pedidos', (req, res) =>{
        const pedido = req.body;
        PedidosModel.postar(pedido,res)
    });

    app.put('/pedidos/:id', (req,res) =>{
        const atualizacao = req.body;
        const selectChaveP = req.params.id;
        PedidosModel.atualiza(atualizacao, selectChaveP, res);
    });

    app.delete('/pedidos/:id', (req, res) =>{
        const deletar = req.params.id;
        PedidosModel.exclusao(deletar, res);
        console.log(deletar)
    });
}