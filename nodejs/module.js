const fs = require('fs');

function getObjFromFile(filePath) {
	const fileData = fs.readFileSync(filePath, { encoding: 'utf-8' });
	return JSON.parse(fileData);
}

module.exports = {
	getObjFromFile,
	test: 10
};