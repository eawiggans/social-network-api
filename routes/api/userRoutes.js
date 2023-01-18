const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');
const { remove } = require('../../models/User');

// /api/users for get and post
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId for getSingleUser, deleteUser, and for update
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// api/users/:userId/friends for addFriend
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:friendId for removeFriend
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;