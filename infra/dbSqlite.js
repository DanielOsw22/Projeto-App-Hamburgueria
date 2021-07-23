const {Sequelize} = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage:'./infra/database.db'
})

async function rodarDb (){
    try{
        await db.authenticate()
        console.log("DB Rodando")
    } catch (err) {
        throw err
    }
}
rodarDb()

module.exports = db