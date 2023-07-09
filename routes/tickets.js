import express from "express";
import get_tickets from "../controllers/tickets/get_tickets.js";
import publish_tickets from "../controllers/tickets/publish_tickets.js";
const router = express.Router();

  router.get('/', get_tickets)
  router.post('/publish', publish_tickets)
  export default router 