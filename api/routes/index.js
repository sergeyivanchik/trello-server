const router = require('express').Router();

router.use('/boards',require('./board'));
router.use('/lists', require('./list'));
router.use('/tasks', require('./task'));
router.use('/users', require('./user'));

module.exports = router;