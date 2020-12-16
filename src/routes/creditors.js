"use strict";
const express = require("express");
let router = express.Router();

router.use(function(req, res, next){
    //timestamp
console.log(req.url, "@", Date.now());
next();

})

router
    .route("/id")
    .get( (req, res) => {
        //creditors/id
        res.send("hi get /creditors/id");
    })
    .post( (req, res) => {
        res.send("hi post /creditors/id");
    });




module.exports = router;