const express = require('express');
const controller = require('../controllers/nftitem');
const router = express.Router();

/**
 * @NFT Item routes
 * http://localhost:10001/v1/nftitem/newitem
 * @Create new NFT OBJECT
 * http://localhost:10001/v1/nftitem/all
 * @Get all nft items
 * http://localhost:10001/v1/nftitem/:id
 * @Get unique NFT Item data
 */

router.post('/newitem', controller.addItem);
router.get('/all', controller.getItems);
router.get('/:id', controller.getItem)

module.exports = router;