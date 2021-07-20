const customExpress = require('./config/customExpress')
const db = require('./infra/dbSqlite')
const Tabelas = require('./infra/tabelas')

const app = customExpress()
app.listen(3000, () => console.log("servidor rodando na porta 3000"))

db.run(Tabelas.produtos)