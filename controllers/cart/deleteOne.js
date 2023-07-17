import Cart from "../../models/Cart.js";
import Tickets from "../../models/Tickets.js";
const remove = async (req, res)=>{
    try {
        const { ticketId }= req.query
        let destroy = await Cart.findOneAndDelete({ticket_id: ticketId})
        if(destroy){
            return res.status(201).json({
                success:true,
                message:"Ticket removed"
            })
        }else{
            return res.status(200).json({
                success:false,
                message:'Error removing ticket.'
            })
        }
    } catch (error) {
        next(error)
    }
}
export default remove