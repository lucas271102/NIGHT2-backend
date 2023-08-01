import User from '../../models/User.js'
import crypto from 'crypto'
import bcryptjs  from 'bcryptjs'
let signup = async (req, res, next)=>{
    req.body.email
    req.body.name
    req.body.surname
    req.body.is_online= false 
    req.body.verify_code= crypto.randomBytes(10).toString('hex')
    req.body.password= bcryptjs.hashSync(req.body.password, 10)
    try {
        await User.create(req.body)
        return res.status(201).json({
            success:true,
            message:'user registered',
            data:req.body
            
        })
    } catch (error) {
        
        next(error )
    }
}
export default signup 