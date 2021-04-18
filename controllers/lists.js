const errorHandler = require('../utils/errorHandler')
const User = require('../models/users')
const NftItems = require('../models/nftitem')
const Auction = require('../models/auction')


module.exports.userList = async function (req, res) {
  try {
    const users = await User.find({}).limit(8)
    res.status(200).send(users)
  } catch (error) {
    errorHandler(res, error)
  }
}
module.exports.allItems = async function (req, res) {
  try {
    NftItems.find({})
      .sort({ date: 1 })
      .sort({ date: -1 })
      .lean()
      .exec((err, items) => {
        console.log(items)
        res.status(200).send(items)
      })
  } catch (error) {
    errorHandler(res, eroor)
  }
}
module.exports.userItems = async function (req, res) {
  try {
    NftItems.find({
      owner: req.params.id,
    })
      .sort({ date: -1 })
      .sort({ date: 1 })
      .lean()
      .exec((err, items) => {
        console.log(items)
        res.status(200).send(items)
      })
  } catch (error) {
    errorHandler(res, error)
  }
}
module.exports.allActions = async function (req, res) {
  const isAuction = req.query.isAuction
  const checker = JSON.stringify(req.query)
  const isAuthor = checker.includes('author')
  const isOwner = checker.includes('owner')
  const higestPrice = checker.includes('higestPrice')
  const lowerPrice = checker.includes('lowerPrice')
  const collection = checker.includes('collection')
  try {
    if (isAuthor) {
      let allAuctions = await Auction.find({
        author: req.query.author,
      })
      let page = req.query.page
      let limit = req.query.limit
      let startIndex = (page - 1) * limit
      let endIndex = page * limit
      let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
      let items = allAuctions.length
      let pageCount = Math.ceil(items / limit)
      res.status(200).json({
        code: 200,
        auctionsTotal: items,
        pagesTotal: pageCount,
        auctions: paginatedAuctions,
      })
      return
    }
    if (isOwner) {
      let allAuctions = await Auction.find({
        owner: req.query.owner,
      })
      let page = req.query.page
      let limit = req.query.limit
      let startIndex = (page - 1) * limit
      let endIndex = page * limit
      let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
      let items = allAuctions.length
      let pageCount = Math.ceil(items / limit)
      res.status(200).json({
        code: 200,
        auctionsTotal: items,
        pagesTotal: pageCount,
        auctions: paginatedAuctions,
      })
      return
    }
    if (!isAuthor && !isOwner && !higestPrice && !lowerPrice && !collection) {
      let allAuctions = await Auction.find({
        isAuction: true,
      }).sort({date: -1})
      let page = req.query.page
      let limit = req.query.limit
      let startIndex = (page - 1) * limit
      let endIndex = page * limit
      let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
      let items = allAuctions.length
      let pageCount = Math.ceil(items / limit)
      res.status(200).json({
        code: 200,
        auctionsTotal: items,
        pagesTotal: pageCount,
        auctions: paginatedAuctions,
      })
      return
    }
    if (higestPrice && !lowerPrice && !collection) {
      let allAuctions = await Auction.find({
        isAuction: true,
      }).sort({
        buyNowPrice: -1,
      })
      let page = req.query.page
      let limit = req.query.limit
      let startIndex = (page - 1) * limit
      let endIndex = page * limit
      let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
      let items = allAuctions.length
      let pageCount = Math.ceil(items / limit)
      res.status(200).json({
        code: 200,
        auctionsTotal: items,
        pagesTotal: pageCount,
        auctions: paginatedAuctions,
      })
      return
    }
    if (lowerPrice && !higestPrice && !collection) {
      let allAuctions = await Auction.find({
        isAuction: true,
      }).sort({
        buyNowPrice: 1,
      })
      let page = req.query.page
      let limit = req.query.limit
      let startIndex = (page - 1) * limit
      let endIndex = page * limit
      let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
      let items = allAuctions.length
      let pageCount = Math.ceil(items / limit)
      res.status(200).json({
        code: 200,
        auctionsTotal: items,
        pagesTotal: pageCount,
        auctions: paginatedAuctions,
      })
      return
    }
    if (collection) {
      if (higestPrice && !lowerPrice) {
        let allAuctions = await Auction.find({
          collectionName: req.query.collection.toLowerCase(),
          isAuction: true,
        }).sort({
          buyNowPrice: -1,
        })
        let page = req.query.page
        let limit = req.query.limit
        let startIndex = (page - 1) * limit
        let endIndex = page * limit
        let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
        let items = allAuctions.length
        let pageCount = Math.ceil(items / limit)
        res.status(200).json({
          code: 200,
          auctionsTotal: items,
          pagesTotal: pageCount,
          auctions: paginatedAuctions,
        })
        return
      }
      if (lowerPrice && !higestPrice) {
        let allAuctions = await Auction.find({
          collectionName: req.query.collection.toLowerCase(),
          isAuction: true,
        }).sort({
          buyNowPrice: 1,
        })
        let page = req.query.page
        let limit = req.query.limit
        let startIndex = (page - 1) * limit
        let endIndex = page * limit
        let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
        let items = allAuctions.length
        let pageCount = Math.ceil(items / limit)
        res.status(200).json({
          code: 200,
          auctionsTotal: items,
          pagesTotal: pageCount,
          auctions: paginatedAuctions,
        })
        return
      } else {
        let allAuctions = await Auction.find({
          collectionName: req.query.collection.toLowerCase(),
          isAuction: true,
        }).sort({date: -1})
        let page = req.query.page
        let limit = req.query.limit
        let startIndex = (page - 1) * limit
        let endIndex = page * limit
        let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
        let items = allAuctions.length
        let pageCount = Math.ceil(items / limit)
        res.status(200).json({
          code: 200,
          auctionsTotal: items,
          pagesTotal: pageCount,
          auctions: paginatedAuctions,
        })
        return
      }
    }
  } catch (error) {
    errorHandler(res, error)
  }
}
module.exports.owner = async function (req, res) {
  try {
    let allAuctions = await Auction.find({
      owner: req.query.owner,
      isAuction: true,
    })
    let page = req.query.page
    let limit = req.query.limit
    let startIndex = (page - 1) * limit
    let endIndex = page * limit
    let paginatedAuctions = allAuctions.slice(startIndex, endIndex)
    let items = allAuctions.length
    let pageCount = Math.ceil(items / limit)
    res.status(200).json({
      code: 200,
      auctionsTotal: items,
      pagesTotal: pageCount,
      auctions: paginatedAuctions,
    })
  } catch (error) {
    errorHandler(res, eroor)
  }
}
