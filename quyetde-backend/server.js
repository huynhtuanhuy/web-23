const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Add question
app.post('/addquestion', function(request, response) {
	console.log("Incumming Question!!!");
	console.log(request.body);
	const questionList = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
	console.log(typeof questionList);

	const lastQuestion = questionList[questionList.length - 1];

	const question = {
		content: request.body.question,
		yes: 0,
		no: 0,
		id: 1
	};

	if(lastQuestion) {
		question.id = lastQuestion.id + 1;
	}

	questionList.push(question);

	fs.writeFileSync('questions.json', JSON.stringify(questionList));

	response.redirect('http://localhost:5000/chi-tiet?questionId='+question.id);
});

// param
// get -> http://localhost:6789/questioninfo/...
app.get('/questioninfo/:questionId', function(request, response) {
	console.log(request.params);
	const questionList = JSON.parse(fs.readFileSync('questions.json', { encoding: 'utf-8' }));
	const questionId = request.params.questionId;

	const question = questionList.filter(function(questionItem) {
		return questionItem.id == questionId;
	})[0];

	response.send(question);
});

const port = 6789;
app.listen(port, function (err) {
	if(err) console.log(err)
	else console.log("Server start success!");
});