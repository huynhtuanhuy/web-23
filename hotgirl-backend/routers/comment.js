const express = require('express');
const CommentRouter = express.Router();

const commentModel = require('../models/comments');

// CRUD
// Create
CommentRouter.post('/', (req, res) => {
    const { content, user, image } = req.body;

    commentModel.create({ content, user, image })
        .then(commentCreated => {
            console.log(commentCreated);
            res.status(201).json({
                success: true,
                data: commentCreated,
            });
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                success: false,
                error,
            });
        });
});

// Get list
CommentRouter.get('/', (req, res) => {
    commentModel.find({})
        .then(commentList => {
            res.json({
                success: true,
                data: commentList,
            });
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                success: false,
                error,
            });
        });
});

// Get one
CommentRouter.get('/:id', (req, res) => {
    commentModel.findById(req.params.id)
        .then(comment => {
            res.json({
                success: true,
                data: comment,
            });
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                success: false,
                error,
            });
        });
});

// Update
CommentRouter.put('/:id', (req, res) => {
    commentModel.findByIdAndUpdate(req.params.id, req.body)
        .then(commentUpdated => {
            res.json({
                success: true,
                data: commentUpdated,
            });
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                success: false,
                error,
            });
        });
});

// Delete
CommentRouter.get('/:id', (req, res) => {
    commentModel.findByIdAndRemove(req.params.id)
        .then(commentDeleted => {
            res.json({
                success: true,
                data: commentDeleted,
            });
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                success: false,
                error,
            });
        });
});

module.exports = CommentRouter;