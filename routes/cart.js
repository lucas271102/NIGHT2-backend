import  express from "express";
const router = express.Router()
import createCart from '../controllers/cart/createAndUpdate.js'
import deleteOne from '../controllers/cart/deleteOne.js'
import viewCart from '../controllers/cart/view.js'
  

router.post('/createcart', createCart)
router.get('/', viewCart)
router.delete('/', deleteOne) 