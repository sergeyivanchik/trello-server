const router = require('express').Router();
const listController = require('../controllers/list');
const passport = require('passport');


router.route("/")
  .get(listController.getLists)
  .post(listController.addList)

router.route("/:boardId")
  .get(listController.getListsByBoard)


module.exports = router;
