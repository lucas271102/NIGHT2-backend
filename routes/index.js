import { Router } from 'express';
import userRouter from './users.js'
var router = Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coming soon: Night2Events' });
});
router.use('/users', userRouter)
export default router;


