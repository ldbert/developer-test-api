"use strict";
const express = require("express");
let router = express.Router();

router.use(function(req, res, next){
    //timestamp
    console.log("bob");
console.log(req.url, "@", Date.now());

$.getJSON("https://developer-test-service-2vfxwolfiq-nw.a.run.app", function(data){
    console.log(data);
})
next();

})

router
    .route("/")
    .get( (req, res) => {
        //creditors/id
        res.send("hi get /credit-search");
    })
    .post( (req, res) => {
        res.send("hi post /credit-search");
    });




module.exports = router;