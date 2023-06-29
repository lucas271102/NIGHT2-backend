import User from '../models/User.js'
 async function  accountExistsSignIn(req, res, next){
const user = await User.findOne({email:req.body.email})
console.log(user)
if(user){
    req.user={
        id:user._id,
        email:user.email,
        profilePicture:user.profilePicture,
        password:user.password,
        is_verified:user.is_verified
    }
    return next()
}
return res.status(400).send('user does not exist')
 }
 export default accountExistsSignIn