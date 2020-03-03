const router = require('express').Router();
const taskController = require('../controllers/task');
const passport = require('passport');


router.route("/")
  .get(passport.authenticate('jwt', { session: false }), taskController.getTasks)
  .post(passport.authenticate('jwt', { session: false }), taskController.addTask)

router.route("/:listId")
  .get(passport.authenticate('jwt', { session: false }), taskController.getTasksByList)

router.route("/:id")
  .put(passport.authenticate('jwt', { session: false }), taskController.changeTaskComplete)


module.exports = router;
