const connect = require('./db_connection');
const fs = require('fs');

const buildQuery = fs.readFileSync('./db_build.sql', 'utf8');


connect.query(buildQuery, (error,data)=>{
	if(error){
		throw error;
	}

	connect.end();
	console.log('Build successful', data);
});






