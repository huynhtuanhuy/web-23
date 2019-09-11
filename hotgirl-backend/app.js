const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session')

const apiRouter = require('./routers/api');

const app = express();

app.use(session({
    secret: 'sajdioda*71238iushisa',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}));

app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.sessionID);
    next();
})

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/hotgirl-23', (err) => {
    if (err) console.log(err)
    else console.log("DB connect success!");
});

app.use('/api', apiRouter);

app.listen(process.env.PORT || 6969, (err) => {
    if (err) console.log(err)
    else console.log("Server start success!");
});