const express = require('express');

const cRouter = express.Router();
const cClientes = require('../controllers/cClientes')

cRouter.get('/',(req,res)=>{cClientes.verClientes(res)})
cRouter.post('/',(req,res)=>{cClientes.adicionarClientes(req, res)})
cRouter.delete('/',(req,res)=>{cClientes.deletarClientes(req, res)})
cRouter.patch('/',(req,res)=>{cClientes.AtualizaClientes(req, res)})

module.exports = cRouter