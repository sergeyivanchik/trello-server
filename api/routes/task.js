const router = require('express').Router();
const taskController = require('../controllers/task');


router.route("/")
  .get(taskController.getTasks)
  .post(taskController.addTask)

router.route("/:listId")
  .get(taskController.getTasksByList)


module.exports = router;
