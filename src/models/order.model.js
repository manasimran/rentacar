const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car"
    },
    timeoforder: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["pending", "completed", "canceled"],
        default: "pending",
    },
    start:{
        type:Date,
        required:true
    },
    end:{
        type:Date,
        required:true
    },
});
export default mongoose.model("order", orderSchema)