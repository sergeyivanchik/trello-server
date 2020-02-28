const router = require('express').Router();
const boardController = require('../controllers/board.js');


router.route("/")
  .get(boardController.getBoards)
  .post(boardController.addBoard)


module.exports = router;
