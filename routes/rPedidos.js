const express = require('express');

const pedRouter = express.Router();
const cPedidos = require('../controllers/cPedidos')

pedRouter.get('/',(req,res)=>{cPedidos.lista(res)})
pedRouter.post('/',(req,res)=>{cPedidos.postar(req, res)})
pedRouter.delete('/',(req,res)=>{cPedidos.exclusao(req, res)})
pedRouter.put('/',(req,res)=>{cPedidos.atualiza(req, res)})


module.exports = pedRouter