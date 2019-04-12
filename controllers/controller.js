var express = require("express");

var router = express.Router();

var potion = require("../models/model.js");

router.get("/", function (req, res) {
    potion.selectAll(function (data) {
        var hbsObject = {
            potion: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/potions", function (req, res) {
    var newPotion = req.body;
    potion.insertOne(newPotion.potion_name,
        function (result) {
            res.json({id: result.insertId});
            // console.log(result.insertId);
        });
});

router.put("/api/potions/:id", function(req, res){
    console.log("hit");
    var id = req.params.id;
    potion.updateOne(id, function(result){
       if (result.changedRows == 0){
           res.status(404).end();
       } else {
           res.status(200).end();
       }
    });
});

module.exports = router;