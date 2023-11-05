const mongoose = require("mongoose")
const jacketSchema = mongoose.Schema({
    size: String,
    colour: String,
    price: Number
})
module.exports = mongoose.model("Jacket", jacketSchema)