const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new Schema({
    description: {
        type: String,
        default: 'Creator description',
        required: true
    },
    ethAddress: {
        type: String,
        default: '',
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date
    },
    image: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('requests', requestSchema)