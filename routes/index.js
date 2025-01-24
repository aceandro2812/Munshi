// var express = require('express');
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

// login route

router.post('/login',function(req,res,next) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email);
  console.log(password);
  // res.send('Received: ' + email);
  //send back to index.ejs
  res.render('landing', { title: 'landing' , email:email });

  
})
module.exports = router;
