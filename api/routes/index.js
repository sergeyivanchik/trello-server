const router = require('express').Router();

router.use('/boards',require('./board'));
router.use('/lists', require('./list'));
router.use('/tasks', require('./task'));

module.exports = router;