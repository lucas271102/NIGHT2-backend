import { Schema, model, Types} from "mongoose";
let schema = new Schema(
    {
        name:{type: String, required:true},
        price:{type:Number, required:true},
        photo:{type:String, required: true},
        category_id:{type: String, required:true},
    },{
        timestamps:true
    }
)
let collection ='tickets'
let Tickets = model(collection, schema)
export default Tickets