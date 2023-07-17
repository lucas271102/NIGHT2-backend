import Tickets from '../../models/Tickets.js'
import Cart from '../../models/Cart.js'
const addToCart= async (req, res)=>{
    try {
        const {ticketId} = req.body;
        
        let ticket = await Tickets.findOne({_id: ticketId})
        if (ticket){
            let cart = await Cart .findOne({ticket_id:ticketId});
            if(!cart){
                const data  = {
                    ticket_id: ticketId,
                    quantity: 1
                }
                let one = await Cart.create(data)
                one = await one.populate('ticket_id')
                const oneFilter={
                    ticket_id:one.ticket_id,
                    quantity:one.quantity
                }
                if(one){
                    return res.status(201).json({
                        one: oneFilter,
                        message:"Ticket added to cart.",
                        timestamps: one.createdAt.getUTCDate()
                    })

                }
            }
        }

    } catch (error) {
        
    }
}

export default addToCart