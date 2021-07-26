const express = require('express')
const consign = require('consign')
const path = require('path')

module.exports = () => {
    const app = express()
    const router = require('../routes/rProdutos') 

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    app.use(express.static('public'));
    app.use('/produto',router)

    return app
}
