var express = require('express');
var router = express.Router();
var request = require('request');


function tabNumber(n,w){
  var n_ = Math.abs(n);
        var zeros = Math.max(0, w - Math.floor(n_).toString().length );
        var zeroString = Math.pow(10,zeros).toString().substr(1);
        if( n < 0 ) {
                zeroString = '-' + zeroString;
        }

  return zeroString+n;
};


/* GET home page. */
router.get('/', function(req, res, next) {



  request({
      url: "http://pokeapi.co/api/v1/pokedex/1",
      json: true
  }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        var json = body,;

          
        // str.slice(-3, -1); // returns 'us'

        // res.write(json.name) // Print the json response
      res.render('index', {title: 'Express', json: json});
      }
  })

  // res.render('index', { title: 'Express' });
});


/* GET pokemon detail page */
router.get('/:pokemon', function(req, res, next) {
  
  var pokeRequested = Number(req.params.pokemon),
      pokemonId = tabNumber(pokeRequested, 3),
      pokemon = "http://pokeapi.co/api/v1/pokemon/" + pokemonId;

  request({
      url: pokemon,
      json: true
  }, function (error, response, body) {

      if (!error && response.statusCode === 200) {
        var pokedetails = body;

          // res.write(json.name) // Print the json response
      res.render('pokemon', {title: 'Pokemon', pokemonId: pokemonId, pokedetails: pokedetails});
      }
  })
})

module.exports = router;
