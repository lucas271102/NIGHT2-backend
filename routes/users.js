//var express = require('express');
import express from 'express'
const router = express.Router();
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js';
import signin from '../controllers/users/signin.js'
import validator from '../middlewares/validator.js';
import passport from '../middlewares/passport.js'
import passwordIsOk from '../middlewares/passwordIsOk.js';
import { userCreateSignIn } from '../schemas/users.js';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('./admins',(req, res, next)=>res.status(200).json({
  success:true,
  admins:[]
}))

router.post('/signin', validator(userCreateSignIn), accountExistsSignIn,passwordIsOk, signin)
export default router;