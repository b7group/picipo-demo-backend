const mongoose = require('mongoose')
const Schema = mongoose.Schema

const auctionSchema = new Schema({
    id:{
        type: String
    },
    minPrice: {
        type: Number
    },
    buyNowPrice: {
        type: Number
    },
    startDate: {
        type: Number
    },
    endDate: {
        type: Number
    },
    owner: {
        type: String
    },
    author: {
        type: String
    },
    isAuction: {
        type: Boolean,
        default: false
    },
    nftName: {
        type: String
    },
    description: {
        type: String
    },
    imageUri: {
        type: String
    },
    collectionName: {
        type: String
    },
    date: {
        type:Date
    }

})

module.exports = mongoose.model('auctions', auctionSchema)