var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    users: [
      {_id: 1, email: 'The backend is connected'},
      {_id: 2, email: 'Everything is running'},
      {_id: 3, email: 'If you can see this'}
    ]
  })
});

module.exports = router;
