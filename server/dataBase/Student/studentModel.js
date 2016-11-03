var Sequelize = require('sequelize');
var db = require('../dataBase.js');
var history = require('../History/historyModel.js');

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

// User.hasMany(Picture, {
//   foreignKey: {
//     name: 'uid',
//     allowNull: false
//   }
// })

//  //return this.belongsTo(Link, 'link_id');
//  return Student.hasMany(Click);


module.exports = Student;