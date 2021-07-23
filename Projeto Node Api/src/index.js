const banco = require('./infra/banco');
const config = require('./infra/config');
const Tabela = require('./infra/tabela');

const app = config();
app.listen(3000, () =>{
    console.log("Servidor Rodando")
})
const tabela = new Tabela();
banco.run(tabela.Fornecedor);