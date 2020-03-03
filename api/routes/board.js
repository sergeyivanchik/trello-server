const router = require('express').Router();
const boardController = require('../controllers/board.js');
const passport = require('passport');


router.route("/")
  .get(passport.authenticate('jwt', { session: false }), boardController.getBoards)
  .post(passport.authenticate('jwt', { session: false }), boardController.addBoard)

router.route("/:id")
  .get(passport.authenticate('jwt', { session: false }), boardController.getBoardById)

module.exports = router;
