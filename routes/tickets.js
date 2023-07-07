import express from "express";
import get_tickets from "../controllers/tickets/get_tickets.js";
const router = express.Router();

  router.get('/', get_tickets)
  export default router 