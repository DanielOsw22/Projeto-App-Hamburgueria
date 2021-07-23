 const sqlite3 = require('sqlite3').verbose();
 const bd = new sqlite3.Database("./infra/bd.db");

 module.exports = bd;