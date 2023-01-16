const { Thought, User, Reaction } = require('../models');

module.exports = {
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
    }
//update/put thought by id

//delete thought by id

//post reaction

//delete reaction

}

