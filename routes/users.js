//var express = require('express');
import express from 'express'
const router = express.Router();
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js';
import signin from '../controllers/users/signin.js'
import signup from '../controllers/users/signup.js'
import validator from '../middlewares/validator.js';

import passwordIsOk from '../middlewares/passwordIsOk.js';
import { userCreateSignIn, userCreateSignUp } from '../schemas/users.js';
import accountSignUp from '../middlewares/accountSignUp.js';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('./admins',(req, res, next)=>res.status(200).json({
  success:true,
  admins:[]
}))
router.post('/signup', accountSignUp, signup)
router.post('/signin', validator(userCreateSignIn), accountExistsSignIn,passwordIsOk, signin)
export default router;