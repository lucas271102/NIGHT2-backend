//var express = require('express');
import express from 'express'
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('./admins',(req, res, next)=>res.status(200).json({
  success:true,
  admins:[]
}))
export default router;