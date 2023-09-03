const CheckInternet = require("../config/CheckInternet");
const { DB_SQLITE, DATABASE } = require("../config/Database"); 
const { GetCurrentUserData } = require("./GetCurrentUserData");
 

const DATABASERUN = (res, query, params, type)=>{
   try { 
      if(CheckInternet() === true){  
         if(type === 0){
            DATABASE.query(query, params, (err, rows)=>{ 
               if(err) return res.json({status:300, success:false, error:err});
               return res.json(rows);
            });
         }else{
            DATABASE.query(query, params , (err)=>{ 
               if(err) return res.json({status:300, success:false, error:err});
               return res.json("success");
             }); 
         } 
      }else{  
         if(type === 0){
            DB_SQLITE.all(query, params, (err, rows)=>{ 
               if(err) return res.json({status:300, success:false, error:err});
               return res.json(rows);
            }); 
         }else{
            DB_SQLITE.run(query, params , (err)=>{ 
               if(err) return res.json({status:300, success:false, error:err});
               return res.json("success");
           }); 
         } 
      } 
   } catch (error) {
      res.status(400).json(error); 
   }  
}
 
 
const RegisterPublication = async(req, res)=>{ 
   const  query = `INSERT INTO eduall_posts(ed_post_for,  ed_post_user , ed_post_code, ed_post_description, ed_post_total_files) VALUES(?,?,?,?,?)`;
   const PARAMS =  [req.body.post_for ,  GetCurrentUserData(0) , req.body.post_code , req.body.post_text, req.body.post_total_files];
   DATABASERUN(res, query , PARAMS, 1);
}
 
 

module.exports = {RegisterPublication};