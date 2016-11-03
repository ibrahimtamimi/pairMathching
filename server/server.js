var express = require('express');
var app = express();
var server = require ('http').createServer(app);
var port = process.env.PORT || 9920;

require('./config/middleware.js') (app,express);
require('./config/routes.js') (app,express);

//=============================================================================
/*                                server                                     */
//=============================================================================
  app.listen(port , function () {
  	console.log('Server now listening on port ' + port);
  	console.log('goto : http://localhost:9920/');
  });



module.exports = app;
