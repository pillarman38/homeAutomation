let express = require('express')
let router = express.Router()
let models = require('../models/portal.model')

router.get('/ip', (req, res)=>{
    // console.log(res)
    models.getIP((err, results)=>{
        if(err){
            return res.send({err: err})
        } else {
            res.send(results)
        }
    })
})

module.exports = router