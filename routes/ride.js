const express = require('express')
const router = express.Router();

const Rider = require('../models/Rider')

router.post('/', async (req, res) => {
    try {
        var currentResult = await Rider.findOne({user: req.body.user}, {_id: 0})

        if (currentResult == null) {
            const rider = new Rider({
                user: req.body.user,
                unicorns: [{
                    unicorn: req.body.unicorn,
                    duration: req.body.duration,
                    occurences: 1
                }]
            })
            await rider.save()
        } else {
            console.log(currentResult)
        //     for (var i = 0; i < currentResult.unicorns.length; i++) {
        //         if (currentResult.unicorns[i].unicorn == req.body.unicorn) {
        //             const rider = {
        //                 user: req.body.user,
        //                 unicorns: [{
        //                     unicorn: req.body.unicorn,
        //                     duration: currentResult.unicorns[i].duration + req.body.duration,
        //                     occurences: currentResult.unicorns[i].occurences + 1
        //                 }]
        //             }
        //             await Rider.findOneAndReplace({user: req.body.user}, rider)
        //             break
        //         }
        //     }
        }

        res.status(200).json({
            message: "Success posting to /ride"
        })
    } catch (err) {
        res.status(500).json({
            message: "Error posting to /ride",
            err
        })
    }
})


module.exports = router