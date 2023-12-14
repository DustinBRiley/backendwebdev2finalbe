const express = require('express')
const router = express.Router()
const itemCon = require('../../controllers/itemController')

router.route('/')   //json crud
    .get(itemCon.getAllItems)
    .post(itemCon.createNewItem)
    .put(itemCon.updateItem)
    .delete(itemCon.deleteItem)

router.route('/:id')    //id in url parameter
    .get(itemCon.getItem)

module.exports = router;