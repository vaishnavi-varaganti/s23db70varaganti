const mongoose = require("mongoose")
const jacketSchema = mongoose.Schema({
    size: String,
    colour: String,
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 3000
    }
})
module.exports = mongoose.model("Jacket", jacketSchema)