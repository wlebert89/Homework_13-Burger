var orm = require("../config/orm.js");

var burger = {
    selectAll: function(){
        orm.selectAll(function(res){
            // cb(res);
            console.log(res);
        });
    },
    insertOne: function(value){
        orm.insertOne(value, function(res){
            console.log(res);
        });
    },
    updateOne: function(id){
        orm.updateOne(id, function(res){
            console.log(res);
        });
    }
};

burger.insertOne("New Burger");

burger.updateOne(2);

burger.selectAll();

module.exports = burger;