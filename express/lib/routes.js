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
  console.log(prices);
  var len = prices.length;
  for(var i=0; i<len; i++){
  	sum += prices[i] * quantities[i];
  }

  if(country === 'AT'){
  	sum = sum * (1 + 0.22);





  if(reduction === 'STANDARD'){
  	if(sum >=50000){
  		sum = sum * (1-0.15)
  	}
  	res.send({'total':sum});
  } else {
  	res.sendStatus(200);
  }



  } else {
  	res.sendStatus(200);
  }




  //res.sendStatus(200);
}

exports.feedback = function products(req, res, next) {
  // FIXME ignored for now
  console.log(req.body);
}
