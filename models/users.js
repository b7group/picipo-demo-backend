const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        default: 'PICIPO_USER'
    },
    nickName: {
        type: String,
        default: 'PICIPO_NICKNAME'
    },
    about: {
        type: String,
        default: 'PICIPO_ABOUT'
    },
    twitter: {
        type: String,
        default: null
    },
    telegram: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: null
    },
    background: {
        type: String,
        default: null
    },
    ethAddress: {
        type: String,
        unique: true,
        default: ''
    },
    accountType: {
        type: String,
        default: 'user'
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model('users', userSchema)