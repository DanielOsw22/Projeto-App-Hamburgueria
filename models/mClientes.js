const db = require('../infra/dbSqlite')

class Produtos {
    listar (res) {
        const query = 'select * from "clientes"'
        db.all(query, (err, lista)=>{
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(lista)
            }
        })
    }

    buscar (id,res) {
        const query = 'select * from "clientes" where id = ?'
        db.all(query, id, (err, result)=>{
            if(err){
                res.status(400).json(err)
            } else {
                res.status(200).json(result)
            }
        })
    }
    
    cadastrar (cadastro,res) {
        const query = 'insert into "clientes" (id, nome) VALUES (?, ?)'
        db.all(query, [cadastro.id, cadastro.nome], (err, result)=>{
            if(err){
                res.status(400).json(err)
                console.log(err)
            } else {
                res.status(201).json(result)
            }
        })
    }

    deletar (id,res) {
        const query = 'delete from "clientes" where id = ?'
        db.all(query, id, (err,result)=>{
            if(err){
                res.status(400).json(err)
            } else {
                res.status(201).json(result)
            }
        })
    }

    atualizar (id,atualizacao,res) {
        const query = 'update "clientes" set ? where id = ?'
        db.all(query, [atualizacao, id], (err,result)=>{
            if (err){
                res.status(400).json(err)
            } else {
                res.status(201).json(result)
            }
        })
    }
}

module.exports = new Produtos