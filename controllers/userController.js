const User = require('../models/User');

module.exports = {
//get all users
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
//get single user by id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId})
        .then((user) =>
        !user
        ? res.status(404).json({ message: 'No user with this ID'})
        : res.json(user))
        .catch((err) => res.status(500).json(err));
    },
//post new user
    createUser(req, res) {
        User.create(req.body)
        .then((socialNetworkDB) => res.json(socialNetworkDB))
        .catch((err) => res.status(500).json(err))
    },

//update user by id

//delete user by id

//post friend by id

//delete friend by id

}


