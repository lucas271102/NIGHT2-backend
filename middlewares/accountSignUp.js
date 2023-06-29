import User from "../models/User.js";
async function accountSignUp(req, res, next){
    const user = await User.findOne({email:req.body.email})
    console.log(user)
    if(user){
        return res.status(400).json('User already exists.')
    }
    return next()


}
export default accountSignUp