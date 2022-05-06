var express = require('express');
var router = express.Router();

/**
 * Creación del controlador de la ruta users de la aplicación.
 */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Usuario', body: 'Elige' +
        ' la opción a la que desees ir:'});
});

/**
 * Creación del controlador de la ruta users/cool de la aplicación.
 */
router.get('/cool/', function(req, res, next) {
  res.render('index', { title: 'Hola!', body: 'Eres genial!' });
});

module.exports = router;
