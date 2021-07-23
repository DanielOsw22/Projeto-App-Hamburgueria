//Testes ainda não estao funcionando!

const Clientes = require('../models/mClientes')
const db = require('../infra/dbSqlite')

const express = require('express')
const app = express()

test('testar select all', () => {
    expect(app.get('/clientes', (req, res) => {
        Clientes.listar(res)
    })).toBe(() => {
        const sql = 'select * from clientes'
        db.query(sql, (err, lista) => {
            return lista
        })
    })
})