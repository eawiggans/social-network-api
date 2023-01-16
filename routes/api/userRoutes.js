const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController');

// /api/users for get and post
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId for getSingleUser and for update eventually
router.route('/:userId').get(getSingleUser);

module.exports = router;