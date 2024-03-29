const router = require('express').Router();
const boardController = require('../controllers/board.js');
const passport = require('passport');


router.route("/")
  .get(boardController.getBoards)
  .post(boardController.addBoard)

router.route("/:id")
  .get(boardController.getBoardById)
  .delete(boardController.deleteBoard)

router.route("/user/:userId")
  .get(boardController.getBoardsByUser)

module.exports = router;
