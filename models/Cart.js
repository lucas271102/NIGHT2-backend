import { Schema, model, Types  } from "mongoose";
let schema = new Schema ({
    name:{type:Types.ObjectId, ref:'tickets', required:true},
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