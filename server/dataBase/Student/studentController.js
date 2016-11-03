var student = require('./studentModel.js');
var db = require('../dataBase.js');


module.exports = {

	addStudent : function (req, res) {
		student.sync({force: false}).then(function () {
		  return student.create({
		    firstName: req.body.firstName,
		    lastName: req.body.lastName
		  });
		});
		res.json('student created' )
	},

	getAllStudent : function (req, res) {
		student.findAll().then(function(student) {
		  res.json({student : student});
		})
	},
	getStudent : function (req, res) {
		student.findAll({
		  where: {
		    id: req.body.id
		  }
		})
		.then(function(student) {
			res.json({student : student});	
		})	
	},
	deleteStudent : function (req, res) {
		student.destroy({
		  where: {
		    id: req.body.id
		  }
		})
		.then(function (student) {
			res.json({student : student});	
		})
	}
}

