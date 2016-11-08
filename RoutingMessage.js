module.exports=function(){

  var route = require('express').Router();

  require('./ProcessMessage')(route);

  return route;
}
