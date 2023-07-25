var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send(`I'm so cool, you're not`);
});

router.get('/cool/hot', function(req, res, next) {
  res.send(`I'm so hot, it's better than being cool`);
});

module.exports = router;
