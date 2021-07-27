const customExpress = require('./config/customExpress')

const app = customExpress()
const port = process.env.PORT || 3000
app.listen(port, () => console.log("servidor rodando na porta 3000"))
