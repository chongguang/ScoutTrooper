var vat = require('./vat')();
var http = require('http');
var reductionCalculator = require('./reduction-calculator')();

exports.tests = function products(req, res, next) {
  // FIXME ignored for now
  res.sendStatus(200);
}

exports.order = function products(req, res, next) {
  // FIXME ignored for now

  var sum = 0;
  var prices = req.body.prices;
  var quantities = req.body.quantities;
  var country = req.body.country;
  var reduction = req.body.reduction;
  console.log(req.body);
  var len = prices.length;
  for(var i=0; i<len; i++){
  	sum += prices[i] * quantities[i];
  }

  sum = sum * (1 + vat(country)/100);

  if(reduction === 'STANDARD'){
  	sum = sum * (1 - reductionCalculator(sum)/100);
    res.send({'total':sum});
  } if (reduction === 'HALF PRICE') {
    //sum = sum /2;
    //res.send({'total':sum});
    res.sendStatus(200);

  } else {
  	res.sendStatus(200);

  }

  

  
}

exports.feedback = function products(req, res, next) {
  // FIXME ignored for now
  console.log(req.body);
  res.sendStatus(200);
}

exports.licenses = function products(req, res, next) {
  // FIXME ignored for now



  var country = req.params.country_name;
  var category = req.params.category_name;

  if(category === 'Fishing'){
    res.send({'licenses': 'FISHING'});
  } else if(category === 'Alcohol'){
    res.send({'licenses': 'OLDER_THAN_21'});
  }else if(category === 'Weapons'){
    res.send({'licenses': 'HUNTING'});
  } else {
  res.sendStatus(200);

  }


}





///////TEST/////////////////////////////////////////////////////

exports.orderTest = function products(req, res, next) {
  // FIXME ignored for now

  var sum = 0;
  var prices = req.body.prices;
  var quantities = req.body.quantities;
  var country = req.body.country;
  var reduction = req.body.reduction;
  console.log(req.body);
  var len = prices.length;
  for(var i=0; i<len; i++){
  	sum += prices[i] * quantities[i];
  }

  sum = sum * (1 + vat(country)/100);

  sum = sum * (1 - reductionCalculator(sum)/100);

  res.send({'total':sum});
}