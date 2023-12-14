const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    }
})

module.exports= mongoose.model("item.js", itemSchema)