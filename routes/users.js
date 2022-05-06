var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Usuario', body: 'Elige' +
        ' la opción a la que desees ir:'});
});

router.get('/cool/', function(req, res, next) {
  res.render('index', { title: 'Hola!', body: 'Eres genial!' });
});

module.exports = router;
