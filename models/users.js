const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        default: 'NFTONE_USER'
    },
    nickName: {
        type: String,
        default: 'NFTONE_NICKNAME'
    },
    about: {
        type: String,
        default: 'NFTONE_ABOUT'
    },
    twitter: {
        type: String,
        default: 'd3vk0n'
    },
    telegram: {
        type: String,
        default: 'd3vk0n'
    },
    avatar: {
        type: String,
        default: 'http://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2'
    },
    background: {
        type: String,
        default: 'https://previews.123rf.com/images/vell/vell2007/vell200700075/153170104-blue-texture-background.jpg'
    },
    ethAddress: {
        type: String,
        unique: true,
        default: ''
    },
    accountType: {
        type: String,
        default: 'user'
    }
})

module.exports = mongoose.model('users', userSchema)