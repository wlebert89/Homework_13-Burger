var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
            // console.log(res);
        });
    },
    insertOne: function(value, cb){
        orm.insertOne(value, function(res){
            cb(res);
            // console.log(res);
        });
    },
    updateOne: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
            // console.log(res);
        });
    }
};

// burger.insertOne("New Burger");

// burger.updateOne(2);

// burger.selectAll();

module.exports = burger;