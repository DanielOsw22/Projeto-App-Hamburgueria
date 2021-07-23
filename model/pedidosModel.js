const bancoDeDados = require('../infra/bancoDeDados');

class PedidosModel {

    lista(res) {
        const selectLista = 'SELECT * FROM "Pedidos"';
        bancoDeDados.all(selectLista, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        });
    }

    postar(pedido, res) {
        const postarLista = 'INSERT INTO "Pedidos"(hora, cpf_func, itens,  valor, id_cliente) VALUES ( ?, ?, ?, ?, ?)';
        bancoDeDados.all(postarLista,
            [pedido.a, pedido.b, pedido.c, pedido.d, pedido.e],

            (erro, resultado) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(resultado)
                }
            });

    }

    atualiza(atualizacao, selectChaveP, res) {
        const atualizarPedido = 'UPDATE "Pedidos" set hora = ?, cpf_func = ?, itens = ?, valor = ?, id_cliente = ? where ID_Pedido = ?';
        bancoDeDados.all(atualizarPedido,
            [atualizacao.a, atualizacao.b, atualizacao.c, atualizacao.d, atualizacao.e, selectChaveP],
            (erro, resultado) => {
                if (erro) {
                    console.log(erro)
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultado)
                }
            });
    }

    exclusao(deletar, res) {
        const apagarPedido = 'DELETE FROM "Pedidos" WHERE ID_Pedido = ?';
        bancoDeDados.all(apagarPedido, deletar, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        });

    };
};

module.exports = new PedidosModel