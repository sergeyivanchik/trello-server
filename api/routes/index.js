const router = require('express').Router();

router.use('/boards',require('./board'));

module.exports = router;