const mongoose = require('mongoose')

const vegetableSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        color: { type: String, required: true },
        readyToEat: Boolean
    },
    {
        timeStamps: true
    }
)


const Vegetables = mongoose.model('vegetables', vegetableSchema)
module.exports = Vegetables