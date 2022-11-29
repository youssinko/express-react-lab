const mongoose = require('mongoose')
//create blueprint /schema
const fruitSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        color: { type: String, required: true },
        readyToEat: Boolean
    },
    {
        timestamps: true
    }
)


const Fruit = mongoose.model('fruit', fruitSchema)
module.exports = Fruit