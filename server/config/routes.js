var helpers = require('./helpers.js');
var dataBase = require ('../dataBase/dataBase.js')
var student = require('../dataBase/student/studentController.js');

module.exports = function (app, express) {
	//============================================================================
	/* 								student routes 								*/
	//============================================================================	
		app.post('/api/student/addStudent', student.addStudent);
		app.get('/api/student/getAllStudent', student.getAllStudent);
	
	//============================================================================
	/* 								history  								*/
	//============================================================================	
		//app.post('/api/dataBase/testConnection', dataBase.testConnection);
	
	//============================================================================
	/* 								erorr case  								*/
	//============================================================================	
	  	// If a request is sent somewhere other than the routes above,
	  	// send it through our custom error handler
	  	app.use(helpers.errorLogger);
	  	app.use(helpers.errorHandler);
};

