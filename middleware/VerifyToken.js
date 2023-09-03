const jwt = require("jsonwebtoken");


 const VerifyToken = (req, res, next)=>{  
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token ===  null) return res.sendStatus(401); 

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if(err) return res.sendStatus(403);
        req.ed_user_account_email = decoded.ed_user_account_email;
        next();
    });
}

module.exports = VerifyToken