const express = require('express');
const controller = require('../controllers/request.js');
const upload = require('../middleware/request')
const router = express.Router();
/**
 * @Request for approve user in Contract to became a mintered
 * http://localjost:10001/v1/request/newrequest
 * description: String representation
 * ethAddress: String representation (Base58 Address)
 * status: Boolean representation - Default false
 * image: req.file | PNG, JPEG <= 1024 * 1024 * 5
 */
router.post('/newrequest', upload.array('portfolio', 5), controller.newRequest);

module.exports = router;