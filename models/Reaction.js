const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        _id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          },
        reactionBody: String,
        username: String,
        createdAt: Date
    },
    { timestamps: true },
);

module.exports = reactionSchema;