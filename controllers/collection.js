const Collection = require('../models/auction')
const errorHandler = require('../utils/errorHandler')
const Unique = require('../utils/unique')
module.exports.addCollection = async function (req, res) {
  try {
    const collection = await new Collection({
      collectionName: req.body.collectionName,
    }).save()
    res.status(201).json(collection)
    console.log(`New collection created ${req.body.collectionName}`)
  } catch (error) {
    errorHandler(res, error)
    console.log(`Error with collection creation`)
  }
}
module.exports.getCollections = async function (req, res) {
  let collections = []
  try {
    const collection = await Collection.find({}, (err, result) => {
      if (err) {
        console.log(err)
      }
    })
    for (let i = 0; i <= collection.length; i++) {
      collections.push(collection[i].collectionName.toLowerCase())
      const x = collection.length - 1
      if (i === x) {
        break
      }
    }
    const allUniqueCollections = Unique(collections)
    res.status(200).json({
      code: 200,
      collections: allUniqueCollections,
    })
  } catch (error) {
    errorHandler(res, error)
  }
}
