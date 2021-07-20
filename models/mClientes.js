const db = require('../infra/dbSqlite')

class Produtos {
    listar (res) {
        const query = 'select * from "produtos"'
        db.all(query, (err, lista)=>{
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(lista)
            }
        })
    }

    buscar (id,res) {
        const query = 'select * from "produtos" where id = ?'
        db.all(query, id, (err, result)=>{
            if(err){
                res.status(400).json(err)
            } else {
                res.status(200).json(result)
            }
        })
    }
    
    cadastrar (cadastro,res) {
        const query = 'insert into "produtos" (descricao, preco, quantidade, ID_fornecedor) VALUES (?, ?, ?, ?)'
        db.all(query, [cadastro.descricao, cadastro.preco, cadastro.quantidade, cadastro.ID_fornecedor], (err, result)=>{
            if(err){
                res.status(400).json(err)
                console.log(err)
            } else {
                res.status(201).json(cadastro)
            }
        })
    }

    deletar (id,res) {
        const query = 'delete from "produtos" where id = ?'
        db.all(query, id, (err,result)=>{
            if(err){
                res.status(400).json(err)
            } else {
                res.status(201).json(result)
            }
        })
    }

    atualizar (id,atualizacao,res) {
        const query = 'update "produtos" set ? where id = ?'
        db.all(query, [atualizacao, id], (err,result)=>{
            if (err){
                res.status(400).json(err)
            } else {
                res.status(201).json(atualizacao)
            }
        })
    }
}

module.exports = new Produtos