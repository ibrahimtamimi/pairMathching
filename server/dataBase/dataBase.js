var Sequelize = require('sequelize');

//=============================================================================
/* 									connection								 */
//=============================================================================
	var sequelize = new Sequelize('database', 'username', 'password', {
	  host: 'localhost',
	  dialect: 'sqlite',

	  pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	  },

	  // SQLite only
	  storage: 'database.sqlite'
	});

	
	// testConnection : function (req, res) {
	// 	db
	// 	  .authenticate()
	// 	  .then(function(err) {
	// 	    console.log('Connection has been established successfully.');
	// 	    res.json('Connection has been established successfully.')
	// 	  })
	// 	  .catch(function (err) {
	// 	    console.log('Unable to connect to the database:', err);
	// 	    res.json('Unable to connect to the database:', err);
	// 	  });
	// },

module.exports = sequelize;


