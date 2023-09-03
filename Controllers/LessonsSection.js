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
 


const GetLessonsSectionByGroup = async(req, res)=>{
    const {CODE} = req.params;
      const  query = 'SELECT * FROM eduall_lessons_sections WHERE ed_lesson_section_deleted = 0 AND ed_lesson_content_groupCode = ?';
      const PARAMS = [CODE];
      DATABASERUN(res, query , PARAMS, 0);
}

const GetSingleLessonSection = async(req, res)=>{
    const  {ID} = req.params; 
   const  query = 'SELECT * FROM eduall_lessons_sections WHERE ed_lesson_section_deleted = 0 AND ed_lesson_section_id = ? '; 
   const PARAMS = [ID];
   DATABASERUN(res, query , PARAMS, 0);
}


const RegisterLessonSection = async(req, res)=>{ 
   const  query = `INSERT INTO eduall_lessons_sections(ed_lesson_section_title,   ed_lesson_section_creator,  ed_lesson_section_groupCode, 
   ed_lesson_section_position) VALUES(?,?,?,?)`; 
    const PARAMS =  [req.body.lesson_section_title,req.body.lesson_section_creator,
   req.body.lesson_section_groupCode, req.body.lesson_section_number];
   DATABASERUN(res, query , PARAMS, 1);
}
 

const LessonSectionDelete = async(req, res)=>{
   const {ID} = req.params; 
   const  query = `UPDATE eduall_lessons_sections SET ed_lesson_section_deleted = 1
   WHERE ed_lesson_section_deleted = 0 AND ed_lesson_section_id = ?`; 
   const PARAMS = [ID];
   DATABASERUN(res, query , PARAMS, 1);
}  

const LessonSectionUpdate = async(req, res)=>{
   const {ID} = req.params;
   const {lesson_section_title, lesson_section_creator, lesson_section_number} = req.body;
   const  query = `UPDATE eduall_lessons_sections SET ed_lesson_section_title = ?, ed_lesson_section_creator = ?,
   ed_lesson_section_position = ? WHERE ed_lesson_section_deleted = 0 AND ed_lesson_section_id = ?`;
   const PARAMS = [lesson_section_title, lesson_section_creator, lesson_section_number,ID];
   DATABASERUN(res, query , PARAMS, 1);
} 
 

const LessonSectionUpdatePosition = async(req, res)=>{
    const {ID} = req.params;
    const { lesson_section_number} = req.body;
      if(CheckInternet() === true){ 
        try {
            const CurrentLessonSection = await LessonsSectionModel.findOne({where:{
              ed_lesson_section_id:ID,
              ed_lesson_section_deleted:0
           }})
            if(!CurrentLessonSection){
              return res.status(400).json("Serviço não encomtrado");
            }   
            CurrentLessonSection.ed_lesson_section_position = lesson_section_number; 
            await CurrentLessonSection.save();
            res.status(201).json("Serviço atualizado com sucesso");
        } catch (error) {
            res.json(error);
        }
  
      }else{
      //########################
      const  query = `UPDATE eduall_lessons_sections SET ed_lesson_section_position = ?
      WHERE ed_lesson_section_deleted = 0 AND ed_lesson_section_id = ?`;

      try { 
          DB_SQLITE.run(query, [lesson_section_number,ID], (err)=>{ 
            if(err) return res.json({status:300, success:false, error:err});
            return res.json("success");
         }); 
      } catch (error) {
         res.status(400).json(error); 
      }   
      //########################
      }

      const PARAMS = [GetCurrentUserData(1)];
      DATABASERUN(res, query , PARAMS, 0);
} 


module.exports = {GetLessonsSectionByGroup, GetSingleLessonSection,
RegisterLessonSection, LessonSectionDelete, LessonSectionUpdatePosition, LessonSectionUpdate  };