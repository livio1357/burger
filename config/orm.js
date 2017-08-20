var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function (burger_name, devoured,date) {
    var queryString = "INSERT INTO `burgers_db`.`burgers` (burger_name , devoured, date) values(??, ?? , ??)";
    console.log(queryString);
    connection.query(queryString, [burger_name,devoured], function(err, result) {
      console.log(result);
    });
  },
  update: function(id) {
    var queryString = "update `burgers_db`.`burgers` set devoured = 1 where id = ??";

    connection.query(queryString, [id], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
