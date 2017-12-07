const test = require('tape');
const shot = require('shot');
const handler = require('../src/handler');
const router = require('../src/router');


test('Initialize', (t) =>{
	let num =2 ;
	t.equal(num, 2, 'Num should be equal to two');
	t.end();
});

