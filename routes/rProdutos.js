const express = require('express');

const pRouter = express.Router();
const cProdutos = require('../controllers/cProdutos')

pRouter.get('/',(req,res)=>{cProdutos.listar(res)})
pRouter.post('/busca',(req,res)=>{cProdutos.buscar(req,res)})
pRouter.post('/',(req,res)=>{cProdutos.cadastrar(req, res)})
pRouter.delete('/',(req,res)=>{cProdutos.deletar(req, res)})
pRouter.patch('/',(req,res)=>{cProdutos.atualizar(req, res)})
pRouter.delete('/deletartudo',(req,res)=>{cProdutos.deletaTab(res)})


module.exports = pRouter