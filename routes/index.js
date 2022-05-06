var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sofka taller 5', body: 'Tutorial de NodeJS' });
});

module.exports = router;
