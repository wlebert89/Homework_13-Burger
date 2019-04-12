var connection = require("../config/connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM potions;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (value, cb) {
        var queryString = "INSERT INTO potions (potion_name) VALUES (?);";
        connection.query(queryString, value, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(id, cb){
        var queryString = "UPDATE potions SET devoured = true WHERE id = ?";
        connection.query(queryString, id, function (err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;