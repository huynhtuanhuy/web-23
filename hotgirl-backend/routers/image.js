const express = require('express');
const ImageRouter = express.Router();

const imageModel = require('../models/images');

// CRUD
// Create
ImageRouter.post('/', (req, res) => {
    const { photo, name, description, user } = req.body;

    imageModel.create({ photo, name, description, user })
        .then(imageCreated => {
            console.log(imageCreated);
            res.status(201).json({
                success: true,
                data: imageCreated,
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
ImageRouter.get('/', (req, res) => {
    const { page=1, pageSize=5 } = req.query;

    imageModel.find({}, {
            __v: 0
        })
        .populate('user', {
            password: 0,
            email: 0
        })
        .limit(Number(pageSize))
        .skip((Number(page) - 1)*Number(pageSize))
        .then(imageList => {
            imageModel.count({}).then(total => {
                res.json({
                    success: true,
                    totalPage: Math.ceil(total/Number(pageSize)),
                    data: imageList,
                });
            })
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                success: false,
                error,
            });
        });
});

// Get one
ImageRouter.get('/:id', (req, res) => {
    imageModel.findById(req.params.id)
        .then(image => {
            res.json({
                success: true,
                data: image,
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
ImageRouter.put('/:id', (req, res) => {
    imageModel.findByIdAndUpdate(req.params.id, req.body)
        .then(imageUpdated => {
            res.json({
                success: true,
                data: imageUpdated,
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
ImageRouter.get('/:id', (req, res) => {
    imageModel.findByIdAndRemove(req.params.id)
        .then(imageDeleted => {
            res.json({
                success: true,
                data: imageDeleted,
            });
        }).catch(error => {
            console.log(error);
            res.status(500).json({
                success: false,
                error,
            });
        });
});

module.exports = ImageRouter;