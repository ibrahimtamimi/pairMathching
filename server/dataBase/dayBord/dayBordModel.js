var Sequelize = require('sequelize');
var db = require('../dataBase.js');
var history = require('../History/historyModel.js');

var dayBord = db.define('dayBord', {
  dayBord : {
  	type : Sequelize.INTEGER
  },
  driver: {
    type: Sequelize.STRING,
  },
  navigater: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true 
});

module.exports = dayBord;