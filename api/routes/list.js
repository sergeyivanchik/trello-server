const router = require('express').Router();
const listController = require('../controllers/list');
const passport = require('passport');


router.route("/")
  .get(passport.authenticate('jwt', { session: false }), listController.getLists)
  .post(passport.authenticate('jwt', { session: false }), listController.addList)

router.route("/:boardId")
  .get(passport.authenticate('jwt', { session: false }), listController.getListsByBoard)


module.exports = router;
