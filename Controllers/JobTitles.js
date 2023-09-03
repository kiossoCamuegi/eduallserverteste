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
  

const GetJobTitles = async(req, res)=>{ 
   const  query = 'SELECT * FROM eduall_job_titles';
   const PARAMS = [];
   DATABASERUN(res, query , PARAMS, 0);
}

const GetSingleJobTitle = async(req,res)=>{
   const {ID} = req.params; 
   const  query = 'SELECT * FROM eduall_job_titles WHERE ed_job_title_id = ? ';
   const PARAMS = [ID];
    DATABASERUN(res, query , PARAMS, 0);
}

module.exports = {GetJobTitles , GetSingleJobTitle};