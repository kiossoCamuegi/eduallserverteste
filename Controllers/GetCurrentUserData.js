const store  = require("store2"); 
const { DATABASE } = require("../config/Database");




const UpdateCurrentUserInstitute = async(req, res)=>{   
    const {CODE} = req.body; 
    try {
        const  query = `SELECT * FROM eduall_user_institutes  LEFT JOIN eduall_institutes ON   
       eduall_user_institutes.ed_user_institute_code = eduall_institutes.ed_institute_code
       WHERE eduall_user_institutes.ed_user_institute_deleted = 0 AND  eduall_user_institutes.ed_user_institute_userCode = ? 
       AND eduall_user_institutes.ed_user_institute_code = ? `;
       DATABASE.query(query, [store.get("eduall_user_curent"), CODE], (err, rows)=>{ 
        if(err) return res.status(300).json({msg:"Erro ao estabelecer ligação com o servidor !"});
        if(rows.length >= 1){
          store.set('eduall_user_curentinstitute', CODE); 
          res.status(200).json("Informação atualizada com sucesso !");
        }else{
            res.status(300).json({msg:"Instituição não encomtrada  !"});
        }     
    })
    } catch (error) {
        console.clear();
        console.log(CODE);
        console.log(error);
        res.status(300).json({msg:"Instituição não encomtrada  !"});
    } 
}
 
function GetCurrentUserData(e) {
    const data =  [
        store.get("eduall_user_curent"),
        store.get("eduall_user_curentinstitute"),
    ];
    return data[e*1];
}

module.exports =  {GetCurrentUserData, UpdateCurrentUserInstitute};