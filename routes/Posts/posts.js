const { Router} = require('express');
const router = new Router();
const authVarification = require('../../authentication/jwt');


router.get('/post',authVarification, (request, response) => {
    response.status(400).json({authentication:'authentication is working Congrates'});
})


module.exports = router;