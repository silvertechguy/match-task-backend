const express = require('express');
const router = express.Router();
const {
  createMatch,
  getMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
} = require('../controllers/matchController');

router.route('/').post(createMatch).get(getMatches);
router.route('/:id').get(getMatchById).put(updateMatch).delete(deleteMatch);

module.exports = router;
