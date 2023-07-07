import { Router } from 'express';
import userRouter from './users.js'
import ticketRouter from './tickets.js'
var router = Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coming soon: Night2Events' });
});
router.use('/users', userRouter)
router.use('/tickets', ticketRouter)
export default router;


