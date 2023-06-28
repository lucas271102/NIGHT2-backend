import jwt from "jsonwebtoken";
import User from '../../models/User.js'

let signin = async(req, res, next)=>{
    try{
        await User.findOneAndUpdate(
            {email:req.body.email},
            {is_online:true},
            {new: true }
        )
        const token = jwt.sign(
            {id:req.user.id},
            process.env.TOKEN,
            {expiresIn:60*60*24}
        )
        const user ={
            email :req.user.email,
            profilePicture:req.user.profilePicture,
        }
        user.password=null
        return res.status(200).json({
            success:true,
            message:'Signed in successfully',
            token, user
        })
    }catch(error){
        next(error)
    }
}
export default signin 