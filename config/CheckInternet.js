var internetAvailable = require("internet-available"); 

const CheckInternet = ()=>{
 return true;
 /*
 internetAvailable({timeout: 5000,  retries: 5}).then(() => {
      // available   
 }).catch(() => {
      // not available     
 }); */
}
module.exports = CheckInternet;