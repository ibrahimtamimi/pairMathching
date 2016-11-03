var student = require('./studentModel.js');
var db = require('../dataBase.js');


module.exports = {

	addStudent : function (req, res) {
		student.sync({force: false}).then(function () {
		  // Table created
		  return student.create({
		    firstName: 'John1',
		    lastName: 'Hancock'
		  });
		});
		res.json('student created' )
	},

	getAllStudent : function (req, res) {
		student.findAll().then(function(student) {
		  res.json({student : student})
		})
	}
 
}

