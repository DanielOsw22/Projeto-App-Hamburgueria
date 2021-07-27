const express = require('express');

const fornRouter = express.Router();
const cFornecedores = require('../controllers/cFornecedores')

fornRouter.get('/',(req,res)=>{cFornecedores.selecao(res)})
fornRouter.post('/',(req,res)=>{cFornecedores.insert(req, res)})
fornRouter.delete('/',(req,res)=>{cFornecedores.delete(req, res)})
fornRouter.patch('/',(req,res)=>{cFornecedores.update(req, res)})

module.exports = fornRouter