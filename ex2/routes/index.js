var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:15030/plantas")
    .then(response => {
      res.render('index', { data: response.data});
    })
    .catch(erro => {
      res.render("error", {message: "erro ao obter pagina inicial", error : erro})
    })
});


router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:15030/plantas/" + req.params.id)
    .then(response => {
      res.render('plantaIndividual', { ind: response.data});
    })
    .catch(erro => {
      res.render("error", {message: "erro ao obter pagina inicial", error : erro})
    })
});

router.get('/especies/:id', function(req, res, next) {
  axios.get("http://localhost:15030/plantas?especie=" + req.params.id)
    .then(response => {
        res.render('index2', { data: response.data});
    })
    .catch(erro => {
      res.render("error", {message: "erro ao obter pagina inicial(1)", error : erro})
    })
});


module.exports = router;
