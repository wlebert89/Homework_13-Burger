var express = require("express");

var router = express.Router();

var burger = require("../models/model.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    var newBurger = req.body;
    console.log("Figuring out what this is: " + newBurger.burger_name);
    burger.insertOne(req.body.burger_name,
        function (result) {
            res.json(result);
            console.log("This is the result: " + result);
        });
});

module.exports = router;