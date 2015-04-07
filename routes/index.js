var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A simple volume meter with realtime graph by Smoothie.js' });
});

module.exports = router;
