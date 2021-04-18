const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nftSchema = new Schema({
    id:{
        type: Number,
        unique : true
    },
    author: {
        type: String,
        default: 'PICIPO'
    },
    owner: {
        type: String,
        default: 'PICIPO'
    },
    nftName: {
        type: String,
        default: 'PICIPO_OBJECT'
    },
    description: {
        type: String,
        default: 'PICIPO_DESCRIPTION'
    },
    imgUri: {
        type: String,
        default: 'https://dapi.dapps.icu/'
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
    },
    params:{
        weight: {
            type: Number
        },
        height: {
            Type: Number
        }
    },
    date: {
        type: Date
    },
    isAuction: {
        type: Boolean,
        default: false
    },
    isOwner: {
        type: String
    },
    isAuthor: {
        type: String
    }
})

module.exports = mongoose.model('nftitems', nftSchema)