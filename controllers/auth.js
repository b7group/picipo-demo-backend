const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const web3 = require('web3');
const config = require('../config/config')
const User = require('../models/users');
const errorHandler = require('../utils/errorHandler')

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
            ethAddress: req.params.id
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
        if(req.body.email){
            userUpdate.email = req.body.email
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

module.exports.login = async function (req, res) {
  if(config.LOGIN_DEBUG){
    console.log('AUTH', req.headers)
  }
  const candidate = await User.findOne({ ethAddress: req.body.ethAddress })
  const ethPassword = web3.utils.toHex(config.hashPassword)
  if (candidate) {
    const passwordResult = bcrypt.compareSync(
      req.headers.host + ethPassword,
      candidate.password,
    )
    if (passwordResult) {
      const token = jwt.sign(
        {
          ethAddress: candidate.ethAddress,
          userID: candidate._id,
        },
        config.jwt,
        { expiresIn: 60 * 60 },
      )
      res.status(200).json({
        token: `Bearer ${token}`,
      })
    } else {
      res.status(401).json({
        message: 'Wrong password! Try Again!',
      })
    }
  } else {
    res.status(404).json({
      message: 'User with this status not registred!',
    })
  }
}

module.exports.register = async function (req, res) {
  const candiadte = await User.findOne({ ethAddress: req.body.ethAddress })
  const ethPassword = web3.utils.toHex(config.hashPassword)
  if (candiadte) {
    res.status(409).json({
      message: 'USER ALREDY REGISTRED, TRY REGISTER WITH ANOTHER ETHADDRESS',
    })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const password = req.headers.host + ethPassword
    const user = new User({
      name: req.body.name,
      nickName: req.body.nickName,
      about: req.body.about,
      twitter: req.body.twitter,
      telegram: req.body.telegram,
      avatar: req.body.avatar,
      background: req.body.background,
      ethAddress: req.body.ethAddress,
      accountType: req.body.accountType,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    })
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res, e)
    }
  }
}

module.exports.checkUser = async function (req, res) {
  let user = false
  try {
    user = await User.findOne(
      {
        ethAddress: req.params.id,
      },
      (err, user) => {
        if (err) {
          res.status(404).json(false)
          return
        }
        if (user) {
          res.status(200).json(true)
          return
        }
        if (!user) {
          res.status(200).json(false)
          return
        }
      },
    )
  } catch (error) {
    errorHandler(res, error)
  }
}
