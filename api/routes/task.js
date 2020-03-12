const router = require('express').Router();
const taskController = require('../controllers/task');
const passport = require('passport');


router.route("/")
  .get(taskController.getTasks)
  .post(taskController.addTask)

router.route("/:listId")
  .get(taskController.getTasksByList)

router.route("/:id")
  .put(taskController.changeTaskComplete)
  .delete(taskController.deleteTask)


module.exports = router;
