const router = require('express').Router();
const userRoutes = require('./userRoutes');
const profileRoutes = require('./profileRoutes');
const offerRoutes = require('./offerRoutes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/offer', offerRoutes);

module.exports = router;
