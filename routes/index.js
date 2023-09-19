import { Router } from 'express';
import userRouter from './users.js'
import ticketRouter from './tickets.js'
import cartRouter from './cart.js'

var router = Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coming soon: Night2Events' });
});
router.use('/users', userRouter)
router.use('/tickets', ticketRouter)
router.use('/cart', cartRouter)

export default router;


