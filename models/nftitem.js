const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nftSchema = new Schema({
    id:{
        type: Number
    },
    author: {
        type: String,
        default: 'NFTONE'
    },
    nftName: {
        type: String,
        default: 'NFTONE_OBJECT'
    },
    description: {
        type: String,
        default: 'NFTONE_DESCRIPTION'
    },
    imgUri: {
        type: String,
        default: 'https://api.dapps.icu/collection/1.json'
    },
    price: {
        type: Number,
        default: 1
    },
    collectionName: {
        type: String
    },
    btfsUri: {
        type: String
    }
})

module.exports = mongoose.model('nftitems', nftSchema)