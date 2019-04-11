var orm = require("../config/orm.js");

var burger = {
    selectAll: function(){
        orm.selectAll(function(res){
            // cb(res);
            console.log(res);
        });
    },
};

burger.selectAll();

module.exports = burger;