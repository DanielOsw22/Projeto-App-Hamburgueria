const bd = require("../infra/bd");

class mFuncionarios {
    lista(res) {
        const qlista = 'SELECT * FROM funcionarios';
        bd.all(qlista, (err, rows) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(rows)
            }
        })
    }

    inserir(cadastro, res) {
        const qinserir = 'INSERT into funcionarios (CPF, Nome, Cargo, Endereço) VALUES(?, ?, ?, ?)';
        bd.all(qinserir, [cadastro.CPF, cadastro.Nome, cadastro.Cargo, cadastro.Endereço], (err, rows) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(201).json(rows)
            }
        })

    }
    delete(cadastro, res) {
        const qdelete = 'DELETE FROM funcionarios WHERE CPF = ?';
        bd.all(qdelete, cadastro, (err, rows) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(201).json(rows)
            }
        })
    }

    atualizar(att, seleciona, res) {
        const qUpdate = "UPDATE funcionarios set nome=?, Cargo=?, Endereço = ? where CPF = ?";
        bd.all(qUpdate, [att.Nome, att.Cargo, att.Endereço, seleciona], (err, rows) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(201).json(rows)
            }
        })
    }

}

module.exports = new mFuncionarios;