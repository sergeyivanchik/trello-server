const router = require('express').Router();
const listController = require('../controllers/list');


router.route("/")
  .get(listController.getLists)
  .post(listController.addList)

router.route("/:boardId")
  .get(listController.getListsByBoard)


module.exports = router;
