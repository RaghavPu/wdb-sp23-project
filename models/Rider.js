const mongoose = require('mongoose')

const RiderSchema = mongoose.Schema({
    user: {type: String, required: true },
    unicorns: [{
        unicorn: {type: String, required: true },
        duration: {type: Number, required: true},
        occurences: {type: Number, required: true}
    }]
})

module.exports = mongoose.model("Riders", RiderSchema)