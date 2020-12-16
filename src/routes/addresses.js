"use strict";
const express = require("express");
let router = express.Router();

router.use(function(req, res, next){
    //timestamp
console.log(req.url, "@", Date.now());
next();

})

router
    .route("/address1")
    .get( (req, res) => {
        //addresses/address1
        res.send("hi get /addresses/address1");
    })
    .post( (req, res) => {
        res.send("hi post /addresses/address1");
    });




module.exports = router;