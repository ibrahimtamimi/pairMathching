var helpers = require('./helpers.js'); 

module.exports = function (app, express) {

	//	app.post('/api/userTest/insertMindSet', userTest.insertMindSet);

	//============================================================================
	/* 								erorr case  								*/
	//============================================================================	
	  	// If a request is sent somewhere other than the routes above,
	  	// send it through our custom error handler
	  	app.use(helpers.errorLogger);
	  	app.use(helpers.errorHandler);
};

