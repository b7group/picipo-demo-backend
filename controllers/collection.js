const Collection = require('../models/collection');
const errorHandler = require('../utils/errorHandler');

module.exports.addCollection = async function(req, res) {
    try {
        const collection = await new Collection({
            collectionName: req.body.collectionName
        }).save()

        res.status(201).json(collection)

        console.log(`New collection created ${req.body.collectionName}`)
    } catch (error) {
        errorHandler(res, error)
        console.log(`Error with collection creation`)
    }
}

module.exports.getCollections =  async function(req, res) {
    try {
        const collection = await Collection({})
        console.log(collection)
    } catch (error) {
        errorHandler(res, error)
    }
}