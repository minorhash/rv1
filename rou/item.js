var express = require('express');
var router = express.Router();
var par;

var cb=function(req, res ) {
par=req.params.id
console.log(par)
res.render('item', {
title: 'item',
name:"tom",
par:par
});
}

router.get('/item:id',[cb] );

module.exports = router;
