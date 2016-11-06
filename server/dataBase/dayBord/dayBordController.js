var dayBord = require('./dayBordModel.js');
var db = require('../dataBase.js');


module.exports = {

	addSlot : function (req, res) {
		dayBord.sync({force: false}).then(function () {
		  return dayBord.create({
		    dayBordNum : req.body.dayBordNum,
		    driver : req.body.driver,
		    navigater : req.body.navigater
		  });
		}).then(function (result) {
			res.json(result);
		});
	},

	getAllSlots : function (req, res) {
		dayBord.findAll().then(function(dayBord) {
		  res.json({dayBord : dayBord});
		})
	},

	deleteSlot : function (req, res) {
		dayBord.destroy({
		  where: {
		    driver: req.body.driver,
		    navigater : req.body.navigater
		  }
		})
		.then(function (dayBord) {
			res.json({dayBord : dayBord});	
		});
	}
 
}

