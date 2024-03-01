var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('estudantes uau');
}); 

router.get('/exercicios', function(req, res, next) {
  res.send('aqui está os exercicios');
}); 

router.get('/provas', function(req, res, next) {
  res.send('aqui está as provas');
});

router.get('/notas', function(req, res, next) {
    res.send('aqui está as notas');
  });

module.exports = router;