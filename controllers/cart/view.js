import Cart from "../../models/Cart.js";
const view = async(req, res)=>{

    try {
        const carts = await Cart.find("-_id ticket_id quantity").populate("ticket_id")
        if  ( carts ){
            res.status(200).json({
                success:true,
                response:carts
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"No tickets found"
    
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'An error occurred'})
    }
} 
export default view 