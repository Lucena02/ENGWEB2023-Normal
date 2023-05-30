var express = require('express');
var router = express.Router();
var planta = require('../controllers/planta')


router.get('/plantas', function(req, res, next) {
  var especie = req.query.especie
  var implant = req.query.implant

  if (especie != null && implant == null){
    planta.getEspecie(especie)
      .then(resultado => {
        res.jsonp(resultado)
      })
      .catch(erro => {
        res.render("error", {error: erro, message: "Erro na obtenção da Espécie"})
      })
  }
  else if (especie == null && implant != null){
    planta.getImplant(implant)
      .then(resultado => {
        res.jsonp(resultado)
      })
      .catch(ero => {
        res.render("error", {error: erro, message: "Erro na obtenção da implantação"})
      })
  }
  else{
    planta.list()
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de plantas"})
    })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  planta.getFregAll()
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de compras"})
    })
});

router.get('/plantas/especies', function(req, res, next) {
  planta.getEspecieAll()
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de compras"})
    })
});



router.get('/plantas/:id', function(req, res, next) {
  planta.listOne(req.params.id)
    .then(plantas => {
      res.jsonp(plantas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção de uma planta"})
    })
});



// POST 

router.post('/plantas', function(req, res) {
  planta.addPlanta(req.body)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da planta"})
    })
});

router.delete("/plantas/:id", function(req, res) {
  planta.deletePlanta(req.params.id)
    .then(resultado => {
      res.jsonp(resultado)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da lista"})
    })
});


module.exports = router;
