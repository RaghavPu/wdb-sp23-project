const mongoose = require('mongoose')

const UnicornSchema = mongoose.Schema({
    name: { type: String, required: true},
    fur: { type: String, required: true},
    hornLength: { type: Number, required: true},
    isBaby: { type: Boolean, required: true},
    owner: String
})

module.exports = mongoose.model("Unicorns", UnicornSchema)