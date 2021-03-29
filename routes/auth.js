const express = require('express');
const controller = require('../controllers/auth');
const router = express.Router();

/**
 * @Auth
 * http://localhost:10001/v1/auth
 * @Get user
 * http://localhost:10001/v1/auth/:id
 * @Patch
 * https://localhost:10001/v1/auth/:id
 */

router.post('/', controller.users),
router.get('/:id', controller.getUser),
router.patch('/:id', controller.updateUser)

module.exports = router;