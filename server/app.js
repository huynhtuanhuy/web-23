const express = require('express');
const app = express();

// Router
app.get('/', function(request, response) {
	console.log(__dirname);
	response.sendFile(__dirname + '/buoi 1/index.html');
	// response.send('<a href="https://google.com">Homepage</a>');
});

// Router
// app.get('/style.css', function(req, res) {
// 	res.sendFile(__dirname + '/buoi 1/style.css');
// });

app.use(express.static('buoi 1'));

const port = 6969;
app.listen(port, function(err) {
	if(err) console.log(err)
	else console.log("Server start success!!!");
});