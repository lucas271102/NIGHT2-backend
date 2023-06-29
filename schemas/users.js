import joi from 'joi'

export const userCreateSignIn= joi.object({
    email:joi.string().email({minDomainSegments:2}).required(),
    password:joi.string().min(8).max(25).required(),
})
export const userCreateSignUp = joi.object({
    email:joi.string().email({minDomainSegments:2}).required(),
    password:joi.string().min(8).max(25).required,
    profilePicture:joi.string()

})