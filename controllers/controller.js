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
    burger.insertOne(newBurger.burger_name,
        function (result) {
            res.json({id: result.insertId});
            // console.log(result.insertId);
        });
});

router.put("/api/burgers/:id", function(req, res){
    console.log("hit");
    var id = req.params.id;
    burger.updateOne(id, function(result){
       if (result.changedRows == 0){
           return res.status(404).end();
       } else {
           res.status(200).end();
       }
    });
});

module.exports = router;