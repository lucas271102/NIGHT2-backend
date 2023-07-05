import express from "express";
import get_ticekts from "../controllers/tickets/get_tickets";
const router = express.Router();
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  router.get('./admins',(req, res, next)=>res.status(200).json({
    success:true,
    admins:[]
  }))
  router.get('/', get_ticekts)