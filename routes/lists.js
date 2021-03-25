const express = require('express');
const controller = require('../controllers/lists');
const router = express.Router();

/**
 * @NFT LISTS
 * http://localhost:10001/v1/lists/users
 * @Get all registred users with data ifno
 */

router.get('/users', controller.userList);

module.exports = router;