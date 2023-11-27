const mongoose = require("mongoose")
const jacketSchema = mongoose.Schema({
    size: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    colour: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 3000
    }
})
module.exports = mongoose.model("Jacket", jacketSchema)