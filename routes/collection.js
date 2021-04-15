const express = require('express');
const controller = require('../controllers/collection')
const router = express.Router();

/**
 * @Collection create
 * https://localhost:10001/v1/collections/newcollection
 */

router.post('/newcollection', controller.addCollection);
router.get('/all', controller.getCollections);
module.exports = router;