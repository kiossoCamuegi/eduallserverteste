const sqlite = require("sqlite3").verbose();
const mysql = require("mysql");


 

const DB_SQLITE = new sqlite.Database("./me.db", (err) => {
    if (err) {
      console.error(err.message);
    }else{
      console.log(' ');
      console.log('*************************************************************');
      console.log('************* BANCO DE DADOS OFFLINE CONECTADO **************');
      console.log('*************************************************************');
      console.log(' ');
    }
  }); 
 
 
 

const  DATABASE  =  mysql.createPool({
  connectionLimit:10,
  host:"bbwmy0j6vnqfwlwreg3x-mysql.services.clever-cloud.com", 
  user:"uf3c2i1lgdfrfn9v",
  password:"mY92miw96iMOuJHuWXH9",
  database:"bbwmy0j6vnqfwlwreg3x",
  port:3306  
}); 


 

 
/*
const DATABASE = new Sequelize('ekhavil_eduall', 'ekhavil_eduall', 'KU45NWLEJsu(', {
  host:'cpanel.ekhavil.com', 
  dialect:'mysql',
  define: {timestamps: false}
}); 
*/
 

module.exports =  {DATABASE, DB_SQLITE};
 