const router = require('express').Router();
const listController = require('../controllers/list');


router.route("/")
  .get(listController.getLists)
  .post(listController.addList)


module.exports = router;
