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
 

const GetRequests = async(req, res)=>{ 
    const  query = 'SELECT * FROM eduall_requests WHERE ed_request_deleted = 0 AND ed_request_institute_code = ?'; 
    const PARAMS = [GetCurrentUserData(1)];
    DATABASERUN(res, query , PARAMS, 0);
}


const GetsingleRequest = async(req,res)=>{
    const {ID} = req.params; 
    const  query = 'SELECT * FROM eduall_requests WHERE ed_request_deleted = 0 AND ed_request_id = ? ';
    const PARAMS = [ID];
    DATABASERUN(res, query , PARAMS, 0);  
}


const GetsingleUserRequests = async(req,res)=>{
    const {USERCODE} = req.params; 
      const  query = 'SELECT * FROM eduall_requests WHERE ed_request_deleted = 0 AND ed_request_user_code = ? ';
      const PARAMS = [USERCODE];
      DATABASERUN(res, query , PARAMS, 0);
}


const RegisterRequest = async(req, res)=>{ 
   const  query = `INSERT INTO eduall_requests(ed_request_type, ed_request_user_code, ed_request_description, 
   ed_request_made_by, ed_request_institute_code) VALUES(?,?,?,?,?)`;
    const PARAMS = [req.body.request_type,req.body.request_user_code,req.body.request_description,
    req.body.request_made_by, GetCurrentUserData(1)];
    DATABASERUN(res, query , PARAMS, 1);
}

const RequestDelete = async(req, res)=>{
    const {ID} = req.params; 
    const  query = `UPDATE eduall_requests SET ed_request_deleted = 1
    WHERE ed_request_deleted = 0 AND ed_request_id = ?`;
    const PARAMS = [ID];
    DATABASERUN(res, query , PARAMS, 1);
} 

const RequestUpdate = async(req, res)=>{
    const {ID} = req.params;
    const { request_type, request_user_code, request_description, request_made_by } = req.body; 
    const  query = `UPDATE eduall_requests SET ed_request_type =? ,ed_request_user_code =?,ed_request_description=? ,ed_request_made_by=?
    WHERE ed_request_deleted = 0 AND ed_request_id = ?`;
    const PARAMS = [request_type, request_user_code,request_description,request_made_by  ,ID];
    DATABASERUN(res, query , PARAMS, 0);
} 



module.exports = {GetRequests, GetsingleRequest, GetsingleUserRequests, RegisterRequest, RequestDelete, RequestUpdate};
