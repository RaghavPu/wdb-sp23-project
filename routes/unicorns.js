const express = require('express')
const router = express.Router();

const Unicorn = require('../models/Unicorn')

router.get('/', async (req, res) => {
    try {
        var result = await Unicorn.find()
        if (req.query.fur != null)
            result = result.filter(unicorn => unicorn.fur == req.query.fur)
        
        res.status(200).json({
            unicorns: result
        })
    } catch (err) {
        res.status(500).json({
            message: "Error getting from /unicorns",
            err
        })
    }
})

router.post('/', async (req, res) => {
    const newUnicorn = new Unicorn({
        name: req.body.name,
        fur: req.body.fur,
        hornLength: req.body.hornLength,
        isBaby: req.body.isBaby,
        owner: req.body.owner
    })

    try {
        var result = await newUnicorn.save()
        res.status(201).json({
            message: "Successful post to /unicorns",
            result
        })
    } catch (err) {
        res.status(500).json({
            message: "Error posting to /unicorns",
            err
        })
    }
})


module.exports = router