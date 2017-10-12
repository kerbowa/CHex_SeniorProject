var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.session.admin) {
  }
  else {
    req.session.error = 'Access denied!';
    res.status(401).end();
  }
});

module.exports = router;
