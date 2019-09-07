const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        image: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Image',
        },
    },
    {
        timestamps: true // createdAt, updatedAt
    }
);

module.exports = mongoose.model('Comment', CommentSchema);