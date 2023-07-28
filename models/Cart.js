import { Schema, model, Types  } from "mongoose";
let schema = new Schema ({
    name:{type:String, required:false},
    ticket_id:{type:Types.ObjectId, ref:'tickets', required:true},
    quantity:{type:Number, required:false}

},
{
    timestamps: true
}
)
let collection = 'carts'
 let Cart = model(collection, schema)
 export default Cart 