const bd = require("./infra/bd");
const config = require("./infra/config");
const Tabela = require("./infra/tabela");

const app = config();

app.listen(3000, () => {
    console.log("rodando na porta 3000")
});

const tabela = new Tabela();
bd.run(tabela.funcionarios);