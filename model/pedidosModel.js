const bancoDeDados = require("../infra/bancoDeDados");

class PedidosModel {
  lista(res) {
    return new Promise((resolve, reject) => {
      bancoDeDados.all('SELECT * FROM "Pedidos"', (erro, resultado) => {
        if (erro) {
          reject(`Erro ao rodar a consulta de pedidos: ${erro}`);
        } else {
          resolve(res.status(200).json(resultado));
        }
      });
    });
  }

  postar(pedido, res) {
    return new Promise((resolve, reject) => {
      bancoDeDados.all(
        'INSERT INTO "Pedidos"(hora, cpf_func, itens,  valor, id_cliente) VALUES ( ?, ?, ?, ?, ?)',
        [pedido.a, pedido.b, pedido.c, pedido.d, pedido.e],
        (erro, resultado) => {
          if (erro) {
            reject(`Erro ao gerar pedido no banco: ${erro}`);
          } else {
            resolve(res.status(200).json(resultado));
          }
        }
      );
    });
  }

  atualiza(atualizacao, selectChaveP, res) {
    return new Promise((resolve, reject) => {
      bancoDeDados.all(
        'UPDATE "Pedidos" set hora = ?, cpf_func = ?, itens = ?, valor = ?, id_cliente = ? where ID_Pedido = ?',
        [
          atualizacao.a,
          atualizacao.b,
          atualizacao.c,
          atualizacao.d,
          atualizacao.e,
          selectChaveP,
        ],
        (erro, resultado) => {
          if (erro) {
            reject(`Erro ao atualizar o pedido: ${erro}`);
          } else {
            resolve(res.status(200).json(resultado));
          }
        }
      );
    });
  }

  exclusao(deletar, res) {
    return new Promise((resolve, reject) => {
      bancoDeDados.all(
        'DELETE FROM "Pedidos" WHERE ID_Pedido = ?',
        deletar,
        (erro, resultado) => {
          if (erro) {
            reject(`Erro ao excluir o pedido: ${erro}`);
          } else {
            resolve(res.status(200).json(resultado));
          }
        }
      );
    });
  }
}
module.exports = new PedidosModel();
