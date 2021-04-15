const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collectionSchema = new Schema({
    collectionName: {
        type: String,
        default: 'PICIPO_COLLECTION'
    }
})

module.exports = mongoose.model('collections', collectionSchema)