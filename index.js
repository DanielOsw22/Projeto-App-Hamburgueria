const customExpress = require('./config/customExpress')
const db = require('./infra/dbSqlite')

const router = require('./routes/rProdutos') 

const app = customExpress()
app.use('/produto',router)


app.listen(3000, () => console.log("servidor rodando na porta 3000"))
/*O Fujita foi o nosso Scrum Master, Product Owner e Team. Tudo ao mesmo tempo!
E ainda tomou banho */