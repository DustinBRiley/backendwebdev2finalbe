const Item = require('../model/item')

// get all items
const getAllItems = async (req,res) => {
    const items = await Item.find()
    if(!items) {
        return res.status(400).json({message: "no items found"})
    }
    res.json(items)
}
// create an item
const createNewItem = async (req,res) => {
    if(!req.body.name || !req.body.price) {
        return res.status(400).json({message: "name and price required"})
    }
    try {
        const result = await Item.create({
            name: req.body.name,
            price: req.body.price
        })
        res.status(201).json(result)
    }
    catch(err) {
        console.log(err)
    }
}
// update item
const updateItem = async (req,res) => {
    if(!req.body.id) {
        return res.status(400).json({message: "id is required"})
    }
    const item = await Item.findOne({_id: req.body.id})
    if(!employee) {
        return res.status(400).json({message: `item ${req.body.id} not found`})
    }
    if(req.body.name) item.name = req.body.name
    if(req.body.price) item.price = req.body.price
    const result = await item.save()
    res.json(result)
}
// delete item
const deleteItem = async (req,res) => {
    if(!req.body.id) {
        return res.status(400).json({message: "id is required"})
    }
    const item = await Item.findOne({_id: req.body.id})
    if(!employee) {
        return res.status(400).json({message: `item ${req.body.id} not found`})
    }
    const result = await Item.deleteOne({_id: req.body.id})
    res.json(result)
}
// get single item
const getItem = async (req,res) => {
    if(!req.params.id) {
        return res.status(400).json({message: "id is required"})
    }
    const item = await Item.findOne({_id: req.params.id})
    if(!employee) {
        return res.status(204).json({message: `item ${req.params.id} not found`})
    }
    res.json(item)
}

module.exports = {
    getAllItems,
    updateItem,
    createNewItem,
    deleteItem,
    getItem
}