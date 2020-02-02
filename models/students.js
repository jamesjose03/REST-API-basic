const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    }
})

const Student = mongoose.model('student',StudentSchema)
module.exports = Student