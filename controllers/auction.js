const Auction = require('../models/auction')
const axios = require('axios')
const errorHandler = require('../utils/errorHandler')

module.exports.finalize = async function (req, res, next) {
  let nftItemId = req.params.id
  try {
    Auction.findOneAndDelete({
      id: nftItemId,
    }).exec((err, auction) => {
      if (err)
        return res.status(500).json({
          code: 500,
          message: 'There was an error deleting the Auction',
          error: err,
        })
      res.status(200).json({
        code: 200,
        message: 'Auction ended successfully',
        finalizedAuction: auction,
      })
    })
  } catch (error) {
    errorHandler(res, error)
  }
}
module.exports.add = async function (req, res) {
  const date = Date.now()
  
  try {
    const auction = await new Auction({
      id: req.body.id,
      minPrice: req.body.minPrice,
      buyNowPrice: req.body.buyNowPrice,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      owner: req.body.owner,
      isAuction: req.body.isAuction,
      author: req.body.author,
      nftName: req.body.nftName,
      description: req.body.description,
      imageUri: req.body.imageUri,
      collectionName: req.body.collectionName.toLowerCase(),
      date: date,
    }).save()
    res.status(200).json({
      code: 200,
      message: 'Auction successfully added:',
      data: auction
    })
  } catch (error) {
    errorHandler(res, error)
  }
}
module.exports.sell = async function (req, res) {
  try {
    const auctionUpdate = await Auction.findOne({
      id: req.params.id,
    })
    console.log(auctionUpdate)
    console.log(req.body)
    if (req.body.isAuction !== void 0) {
      auctionUpdate.isAuction = req.body.isAuction
      console.log(req.body.isAuction)
    }
    if (req.body.minPrice !== void 0) {
      auctionUpdate.minPrice = req.body.minPrice
    }
    if (req.body.buyNowPrice !== void 0) {
      auctionUpdate.buyNowPrice = req.body.buyNowPrice
    }
    if (req.body.startDate !== void 0) {
      auctionUpdate.startDate = req.body.startDate
    }
    if (req.body.endDate !== void 0) {
      auctionUpdate.endDate = req.body.endDate
    }
    if (req.body.owner !== void 0){
      auctionUpdate.owner = req.body.owner
    }
    await auctionUpdate.save()
    res.status(200).send(auctionUpdate)
  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.getItem = async function(req, res) {
    try {
        const item = await Auction.findOne({
            id:req.params.id
        })
        res.send(item)
    } catch (error) {
        errorHandler(res, error)
    }
}
