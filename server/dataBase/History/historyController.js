var history = require('./historyModel.js');
var db = require('../dataBase.js');


module.exports = {

	addStudentHistory : function (req, res) {
		history.sync({force: false}).then(function () {
		  return history.create({
		    student: req.body.student,
		    old_Pair: req.body.old_Pair
		  });
		});
		res.json('history created' )
	},

	getAllStudentHistory : function (req, res) {
		history.findAll().then(function(history) {
		  res.json({history : history});
		})
	},

	deleteStudentHistory : function (req, res) {
		history.destroy({
		  where: {
		    id: req.body.id
		  }
		})
		.then(function (history) {
			res.json({history : history});	
		})
	}
 
}

