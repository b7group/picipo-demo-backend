const User = require('../models/users');
const errorHandler = require('../utils/errorHandler');

module.exports.users =  async function(req, res) {
    const userAddress = req.body.ethAddress
    const checkAddress = await User.findOne({
            ethAddress: userAddress
        });
    try {
        User.findOne({
            ethAddress: req.body.ethAddress
        }, async (err, obj) => {
            if(obj){
                res.send(obj)
            }
            if(err){
                res.send(err)
            } else {
                const newUser = await new User({
                    name: req.body.name,
                    nickName: req.body.nickName,
                    about: req.body.about,
                    twitter: req.body.twitter,
                    telegram: req.body.telegram,
                    avatar: req.body.avatar,
                    background: req.body.background,
                    ethAddress: req.body.ethAddress,
                    accountType: req.body.accountType
            }).save()
                res.status(201).send(newUser)
            }
        })
    } catch (error) {
        errorHandler(res, error)
    }
}
module.exports.getUser =  async function(req, res) {
    try {
            const user = await User.findOne({
            ethAddress:req.params.id
        })
        res.status(200).send(user)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.updateUser =  async function(req, res, next) {
    try {
        const userUpdate = await User.findOne({
            trxAddress: req.params.id
        })
        if(req.body.name){
            userUpdate.name = req.body.name
        }
        if(req.body.nickName){
            userUpdate.nickName = req.body.nickName
        }
        if(req.body.about) {
            userUpdate.about = req.body.about
        }
        if(req.body.twitter){
            userUpdate.twitter = req.body.twitter
        }
        if(req.body.telegram){
            userUpdate.telegram = req.body.telegram
        }
        if(req.body.avatar){
            userUpdate.avatar = req.body.avatar
        }
        if(req.body.background){
            userUpdate.background = req.body.background
        }
        if(req.body.accountType){
            userUpdate.accountType = req.body.accountType
        }
        await userUpdate.save()
        res.status(200).send(userUpdate)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.changeAccountType =  async function(req, res) {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}

