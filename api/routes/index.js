const router = require('express').Router();

router.use('/auth', require('./auth'))
router.use('/recuiters', require('./recuiters'))
router.use('/companies',require('./companies'))


module.exports = router;
