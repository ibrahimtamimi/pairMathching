var Sequelize = require('sequelize');
var db = require('../dataBase.js');

var Student = db.define('Student', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' 
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true 
});

module.exports = Student;