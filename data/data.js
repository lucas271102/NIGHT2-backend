import 'dotenv/config.js'
import '../database/database.js'
import { tickets } from './tickets.js'
import Tickets from '../models/Tickets.js'
let newTickets = async(tickets)=>await Tickets.insertMany(tickets)

let data = async ()=>{
    await newTickets(tickets)
    console.log('Done')
}
data()