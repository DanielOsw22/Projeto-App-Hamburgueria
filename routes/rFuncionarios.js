const express = require('express');

const fRouter = express.Router();
const cFuncionarios = require('../controllers/cFuncionarios')

fRouter.get('/',(req,res)=>{cFuncionarios.lista(res)})
fRouter.post('/',(req,res)=>{cFuncionarios.inserir(req, res)})
fRouter.delete('/',(req,res)=>{cFuncionarios.delete(req, res)})
fRouter.put('/',(req,res)=>{cFuncionarios.atualizar(req, res)})


module.exports = fRouter