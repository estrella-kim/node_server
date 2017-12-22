var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next){
    res.send('this is log in page ', { name: 'lea', age : '24' });
})

module.exports = router;