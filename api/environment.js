//for database connection
var mysql = require('mysql');
var http = require('http');

var enviroment = {
	Dbconnection : mysql.createPool({
			database : 'microlise_df',
		    user : 'microlise',
			password : 'microlise123',
		    host :'digitalfives-apps.org',
	}),

	/** Function For Time stamp**/
	timestamp: function() {
      var UTCtimestamp = new Date();
      return UTCtimestamp.getTime();
    }
}
module.exports = enviroment;
 

