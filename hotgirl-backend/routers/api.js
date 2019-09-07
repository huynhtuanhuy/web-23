const express = require('express');
const ApiRouter = express.Router();

const commentRouter = require('./comment');
const imageRouter = require('./image');
const userRouter = require('./user');
const authRouter = require('./auth');

ApiRouter.get('/', (req, res) => {
    res.send('Hotgirl API!');
});

ApiRouter.use('/comments', commentRouter);
ApiRouter.use('/images', imageRouter);
ApiRouter.use('/users', userRouter);
ApiRouter.use('/auth', authRouter);

module.exports = ApiRouter;