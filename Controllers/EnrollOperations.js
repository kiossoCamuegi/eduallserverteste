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
 

const GetEnrollOperations = async(req, res)=>{ 
   const  query = 'SELECT * FROM eduall_academic_level WHERE ed_academic_level_deleted = 0 AND  ed_academic_level_institute_code = ?'; 
   const PARAMS = [GetCurrentUserData(1)];
   DATABASERUN(res, query , PARAMS, 0);
}



const GetSingleEnrollOperation = async(req,res)=>{
   const {ID} = req.params; 
   const  query = 'SELECT * FROM eduall_academic_level WHERE ed_academic_level_deleted = 0 AND  ed_academic_level_institute_code = ?'; 
   const PARAMS = [GetCurrentUserData(1)];
   DATABASERUN(res, query , PARAMS, 0);
}
 

const RegisterEnrollOperation = async(req, res)=>{ 
          const Data = { 
               ed_enroll_operation_user:req.body.enroll_operation_user, 
               ed_enroll_operation_action:req.body.enroll_operation_action,  
               ed_enroll_operation_student:req.body.enroll_operation_student , 
               ed_enroll_operation_type:req.body.enroll_operation_type 
          } 
   const  query = `INSERT INTO eduall_academic_level(ed_academic_level_title, ed_academic_level_institute_code) VALUES(?,?)`; 
     const PARAMS = [GetCurrentUserData(1)];
   DATABASERUN(res, query , PARAMS, 0);
}
 

const EnrollOperationDelete = async(req, res)=>{
     const {ID} = req.params; 
      const  query = `UPDATE eduall_academic_level SET ed_academic_level_deleted = 1
      WHERE ed_academic_level_deleted = 0 AND ed_academic_level_id = ?`; 
       const PARAMS = [GetCurrentUserData(1)];
   DATABASERUN(res, query , PARAMS, 0);
} 
 

const EnrollOperationUpdate = async(req, res)=>{
     const {ID} = req.params;
     const  {enroll_operation_user ,  enroll_operation_student , enroll_operation_type} =  req.body; 
   const  query = `UPDATE eduall_academic_level SET ed_enroll_operation_user = ,
   WHERE ed_academic_level_deleted = 0 AND ed_academic_level_id = ?`;
   const PARAMS =  [enroll_operation_user, enroll_operation_student,enroll_operation_type ,ID];
   DATABASERUN(res, query , PARAMS, 0);
} 


module.exports = {GetEnrollOperations, GetSingleEnrollOperation, RegisterEnrollOperation, EnrollOperationDelete, EnrollOperationUpdate};