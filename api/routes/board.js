const router = require('express').Router();
const boardController = require('../controllers/board.js');


router.route("/")
  .get(boardController.getBoards)
  .post(boardController.addBoard)

router.route("/:id")
  .get(boardController.getBoardById)

module.exports = router;
