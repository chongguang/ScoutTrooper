var vat = require('./vat')();
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
  } else {
  	res.sendStatus(200);

  }

  

  res.send({'total':sum});
}

exports.feedback = function products(req, res, next) {
  // FIXME ignored for now
  console.log(req.body);
  res.sendStatus(200);
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