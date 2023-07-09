import Tickets from "../../models/Tickets.js";
let publish_tickets= async ( req, res, next)=>{
    req.body.name
    req.body.photo
    req.body.price
    req.body.category_id
    try {
        await Tickets.create(req.body)
        return res.status(201).json({
            success:true,
            message:'Your ticket was successfully published!',
            data: req.body

        })
    } catch (error) {
        next(error)
    }
}
export default publish_tickets