const express = require('express');
const controller = require('../controllers/auction')
const router = express.Router();

router.post('/add', controller.add);
router.delete('/finalize/:id', controller.finalize);
router.patch('/:id', controller.sell)
router.get('/:id', controller.getItem)

module.exports = router;