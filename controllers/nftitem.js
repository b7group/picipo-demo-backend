const NftItem = require('../models/nftitem');
const errorHandler = require('../utils/errorHandler');
const config = require('../config/config');

module.exports.addItem = async function(req, res) {
    try {
        const nftItem = await new NftItem({
            id: req.body.id,
            author: req.body.author,
            nftName: req.body.nftName,
            description: req.body.description,
            imgUri: req.body.imgUri,
            price: req.body.price,
            collectionName: req.body.collectionName,
            btfsUri: req.body.btfsUri
        }).save()
        console.log(nftItem)
        res.send(nftItem)
    } catch (error) {
        errorHandler(res, error)
        console.log(`Error with NFTITEM creation`)
    }
}
module.exports.getItems =  async function(req, res) {
    try {
        const itmes = await NftItem.find({})
        console.log(itmes)
        res.send(itmes)
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.getItem = async function(req, res) {
    try {
        const item = await NftItem.findOne({
            id:req.params.id
        })
        res.send(item)
    } catch (error) {
        errorHandler(res, error)
    }
}