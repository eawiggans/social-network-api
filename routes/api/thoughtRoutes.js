const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought);
//.put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions

// /api/thoughts/:thoughtId/reactions/:reactionId

module.exports = router;