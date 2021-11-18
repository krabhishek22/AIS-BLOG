
const jwt = require('jsonwebtoken')

const newauth = async(req,res,next) =>{
    try {
        let token = localStorage.getItem('token')
        console.log("middleware token",token)
        //const isCustomAuth = token.length < 500;

        
       let decodedData = jwt.verify(token,'test');
        req.userId = decodedData ?.indexOf;
       
        next();
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = newauth