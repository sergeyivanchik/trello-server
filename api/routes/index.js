const router = require('express').Router();

router.use('/boards',require('./board'));
router.use('/lists', require('./list'));

module.exports = router;