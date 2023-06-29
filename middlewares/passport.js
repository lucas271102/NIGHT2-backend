import passport from "passport";
import passportJwt from 'passport-jwt'
import User from "../models/User";
passport.use(
    new passportJwt.Strategy({
        jwtFromRequest:passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey:process.env.TOKEN
    },
    async (jwt_payload, done)=>{
        try {
            console.log(jwt_payload)
            let user = await User.findOne({_id:jwt_payload.id})
            if(user){
                return done(null, user)

            }else{
                return done(null, false)
            }
        } catch (error) {
            console.log(error)
            return done (error, null )
        }
    }
    )
)

export default passport