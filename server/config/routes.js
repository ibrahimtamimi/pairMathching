var helpers = require('./helpers.js');
var student = require('../dataBase/student/studentController.js');
var history = require('../dataBase/history/historyController.js');
var dayBord = require('../dataBase/dayBord/dayBordController.js');
//var dataBase = require ('../dataBase/dataBase.js')

module.exports = function (app, express) {
	//============================================================================
	/* 								student routes 								*/
	//============================================================================	
		app.post('/api/student/addStudent', student.addStudent);
		app.get('/api/student/getAllStudent', student.getAllStudent);
		app.post('/api/student/getStudent', student.getStudent);
		app.post('/api/student/deleteStudent', student.deleteStudent);
		app.post('/api/student/deleteAllStudent', student.deleteAllStudent)
	
	//============================================================================
	/* 									history  								*/
	//============================================================================	
		app.post('/api/history/addStudentHistory', history.addStudentHistory);
		app.get('/api/history/getAllStudentHistory', history.getAllStudentHistory);
		app.post('/api/history/deleteStudentHistory', history.deleteStudentHistory);
	
	//============================================================================
	/* 									dayBord  								*/
	//============================================================================	
		app.post('/api/dayBord/addSlot', dayBord.addSlot);
		app.get('/api/dayBord/getAllSlots', dayBord.getAllSlots);
		app.post('/api/dayBord/deleteSlot', dayBord.deleteSlot);

	//============================================================================
	/* 								erorr case  								*/
	//============================================================================	
	  	// If a request is sent somewhere other than the routes above,
	  	// send it through our custom error handler
	  	app.use(helpers.errorLogger);
	  	app.use(helpers.errorHandler);
};

