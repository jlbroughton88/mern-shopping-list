const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
// router.get instead of app.get because we arent in server.js
router.get('/', (req, res) => {
    // find() will return our items
    Item.find()
    // sorts descending by date
    .sort({ date: -1 })
    // sends items to json
    .then(items => res.json(items))
});
  
// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        // Name will come from req, from bodyParser
        name: req.body.name
    });

    // Gives us back the item its saving
        // Gives us the item in JSON
    newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items
// @desc    Delete an Item
// @access  Public
router.post('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
.catch(err => res.status(404).json({success: false}))
})



module.exports = router;