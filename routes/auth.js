const express = require('express');
const controller = require('../controllers/auth')
const router = express.Router();

/**
 * @Auth
 * http://localhost:10001/v1/auth
 * @Get user
 * http://localhost:1001/v1/auth/:id
 */

// router.post('/', controller.users),
router.get('/:id', controller.getUser),
router.patch('/:id', controller.updateUser)
router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/checkuser/:id', controller.checkUser)

module.exports = router;