var Sequelize = require('sequelize');
var db = require('../dataBase.js');

var history = db.define('history', {
  student: {
    type: Sequelize.STRING,
  },
  old_Pair: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true 
});

module.exports = history;