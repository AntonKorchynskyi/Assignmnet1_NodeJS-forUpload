var express = require('express');
var router = express.Router();

console.log("Page is currently working on http://localhost:3000/")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/projects', function(req, res, next) {
  res.render('projects');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

function logger(req, res, next) {
  console.log("Received request to path: " + req.url);
  next();
}

function notFound(req, res, next) {
  res.render('error');
  res.end();
}

module.exports = router;
