
const errorHandler = require('../utils/errorHandler');
const User = require('../models/users');

module.exports.userList = async function(req, res) {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (error) {
        errorHandler(res, error)
    }
}