const express = require('express');

const router = express.Router();
const cProdutos = require('../controllers/cProdutos')

router.get('/',(req,res)=>{cProdutos.listar(res)})
router.get('/busca',(req,res)=>{cProdutos.buscar(req,res)})
router.post('/',(req,res)=>{cProdutos.cadastrar(req, res)})
router.delete('/',(req,res)=>{cProdutos.deletar(req, res)})
router.patch('/',(req,res)=>{cProdutos.atualizar(req, res)})
router.delete('/deletartudo',(req,res)=>{cProdutos.deletaTab(res)})

module.exports = router