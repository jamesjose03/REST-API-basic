const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GeoSchema =  new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: Number,
        index: "2dsphere"
    }

})
const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name is required!']
    },
    rank: {
        type: String,
    },
    availability: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
})

const Student = mongoose.model('student',StudentSchema)
module.exports = Student