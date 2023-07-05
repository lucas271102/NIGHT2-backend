import Tickets from '../../models/Tickets.js'
let get_ticekts = async(req, res, next)=>{
    let queries  ={}
    let sort= {}
    let pagination = {
        limit:6,
        page:1
    }
    if(req.query.name){
        queries.name= new RegExp(req.query.name.trim(), 'i')
    }

    if(req.query.category_id){
        queries.category_id = req.category_id.split(',')

    }
    if(req.query.order){
        sort.name= req.query.order
    }
    if (req.query.page){
        pagination.limit= req.query.limit
    }
    console.log(queries)
    try {
        let all = await Tickets
        .find(queries)
        .sort(sort)
        .skip(pagination.page >0 ?(pagination.page -1 )*pagination.limit:0)
        .limit(pagination.limit>0 ? pagination.limit: 0)
        return res.status(200).json({
            success:true, response: all
        })
    } catch (error) {
        next(error)
    }
}
export default get_ticekts