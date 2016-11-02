var db = require('../dataBase.js');

var User = db.define('user', {
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