const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        // _id: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        //   },
        thoughtText: String,
        createdAt: Date,
        username: String,
        reactions: [reactionSchema]

    },
    { timestamps: true },
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;