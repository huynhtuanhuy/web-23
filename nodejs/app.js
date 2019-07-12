console.log("Hello world");

const fs = require('fs');

// fs.writeFile('data.txt', 'Hello world!!!', function(err) {
// 	if(err) console.log('Fail')
// 	else console.log('Success');
// });

// fs.writeFileSync('dataSync.txt', new Date().valueOf());

// console.log("After write file", new Date().valueOf());

// fs.readFile('data.txt', {encoding: 'utf-8'}, function(err, data) {
// 	if(err) console.log('Fail')
// 	else console.log('Success', data);
// });

// console.log('Data Sync: ', fs.readFileSync('dataSync.txt', {encoding: 'utf-8'}));

const obj = {
	name: 'Huy',
	age: 18
};

// JSON

// console.log(String(obj))

// fs.writeFileSync('objData.txt', JSON.stringify(obj));

const getObj = require('./module').getObjFromFile;

// const fileData = fs.readFileSync('objData.txt', { encoding: 'utf-8' });
const fileDataObj = getObj('objData.txt');
console.log("Toi la " + fileDataObj.name + ", " + fileDataObj.age + " tuoi.");