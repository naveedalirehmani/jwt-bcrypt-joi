const { Router }  = require('express');
const router = new Router();
const registrationRoutes = require('./Registration/auth');
const postsRoutes = require('./Posts/posts');

router.use('/', registrationRoutes);
router.use('/',postsRoutes)

module.exports = router;