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

                }else{
                    return res.status(404).json({
                        sucess:false,
                        message:"Error adding to cart."
                    })
                }
            }else{
                if(ticket.stock_available > cart.quantity){
                    const data ={
                        quantity: cart.quantity + 1
                    }
                    console.log("before update", cart)
                    let update = await Cart.findByIdAndUpdate(
                        cart._id,
                        data,
                        {new: true},
                    ).populate("ticket_id").select("-_id ticket_id quantity")
                    if (update){
                        return res.status(200).json({
                            success: true,
                            message:"Ticket updated successfully",
                            update: update
                        })
                    }else {
                        return res.status(404).json({
                            success: false,
                            message: "Ticket out of stock"
                        })
                    }
                }
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            messsage:"Something went wrong"
        })
    }
}

export default addToCart