const { Thought, User} = require('../models');

module.exports = {
//get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
//get thought by id
    getThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) => 
        !thought
        ? res.status(404).json({ message: 'No thought with this ID'})
        : res.json(thought));
    },
//post new thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id }},
                { new: true }
            );
        })
        .then((user) => 
        !user 
        ? res.status(404).json({ message: 'Thought created, but found no user with this ID'})
        : res.json('Created new thought for this user'));
    },
//update/put thought by id FINISH THIS
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            
        )
    },
//delete thought by id

//post reaction
addReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
    )
    .then((thought) =>
    !thought
    ? res.status(404).json({ message: 'No thought with that ID' })
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},
//delete reaction
removeReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reaction: { reactionId: req.params.reactionId } } },
        { new: true }
    )
    .then((thought) =>
    !thought
    ? res.status(404).json({ message: 'No thought with that ID' })
    : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
}
}

