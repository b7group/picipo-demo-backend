const multer = require('multer')
const moment = require('moment')

const store = multer.diskStorage({
  destination(req, file, cb) {
      cb(null, 'uploads/')
  },
  filename(req, file, cb) {
      const date = moment().format('DDMMYYYY-HHmmss_SSS')
      cb(null, `${date}-${file.originalname}` )
  },
})

const filter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }

}

const limits = {
    fileSize: 1024 * 1024 * 5
}

module.exports = multer({
    storage: store,
    fileFilter: filter,
    limits: limits
})
