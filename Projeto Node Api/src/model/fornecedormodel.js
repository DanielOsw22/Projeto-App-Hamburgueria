const banco = require('../infra/banco');

class Querys {
    selecao (res){
        const qselecao = 'SELECT * FROM Fornecedor';
        banco.all(qselecao,(erro,rows) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(rows)
            }
        })
    } 
    insert (inserir, res){
        const qinsert = 'INSERT into Fornecedor (Id_fornecedor, nome, CNPJ, telefone) VALUES(?, ?, ?, ?)';
        banco.all(qinsert,[inserir.a, inserir.b, inserir.c, inserir.d],(erro,rows) =>{
            if(erro){
                console.log(inserir)
                res.status(400).json(erro)
            }else{
                res.status(200).json(rows)
            }
        })
    }
    delete (deletar, res){
        const qdelete = 'Delete from Fornecedor where Id_fornecedor =?'
        banco.all(qdelete, deletar, (erro,rows) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(rows)
            }
        })
    }
    update (atualizar, selecionar, res){
        const qupdate = "Update Fornecedor set nome =?, CNPJ =?, telefone =? where Id_fornecedor =? "
        banco.all(qupdate, [atualizar.nome, atualizar.CNPJ, atualizar.telefone, selecionar], (erro, rows) =>{
            if(erro){
                console.log(atualizar,selecionar)
                res.status(400).json(erro)
            }else{
                res.status(200).json(rows)
            }
        })
    }
}


module.exports = new Querys;

