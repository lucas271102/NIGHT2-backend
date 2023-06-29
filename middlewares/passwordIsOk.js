import bcryptjs from 'bcryptjs'
function passwordIsOk(req, res, next){
    const db_pass =req.user.password
    const form_pass = req.body.password
    if(bcryptjs.compareSync(form_pass, db_pass)){
        return next()
    }
    return res.status(400).json({
        success:false,
        message:'Password is wrong!'
    })
}
export default passwordIsOk