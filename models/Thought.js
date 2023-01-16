const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: String,
        createdAt: Date,
        username: String,
        reactions: [Reaction]

    },
    { timestamps: true },
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;