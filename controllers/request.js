const errorHandler = require('../utils/errorHandler');
const Request = require('../models/request')

module.exports.newRequest =  async function(req, res) {
    const date = Date.now();
    const request = new Request({
        description: req.body.description,
        ethAddress: req.body.ethAddress,
        date: date,
        image: req.file ? req.file.path : ''
    })
    try {
        await request.save()
        res.status(201).json(request)
    } catch (error) {
        errorHandler(res, error)
    }
}