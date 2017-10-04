var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var crypto = require('crypto');
var db = new sqlite3.Database('database/chex.db');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

function hashPassword(password, salt) {
  var hash = crypto.createHash('sha256');
  hash.update(password);
  hash.update(salt);
  return hash.digest('hex');
}

passport.use(new LocalStrategy(function(username, password, done) {
  db.get('SELECT SALT FROM ADMIN WHERE USERNAME = ?', username, function(err, row) {
  if (!row) return done(null, false);
  var hash = hashPassword(password, row.SALT);
    db.get('SELECT USERNAME, ID FROM ADMIN WHERE USERNAME = ? AND HASH = ?', username, hash, function(err, row) {
      if (!row) return done(null, false);
      return done(null, row);
    });
  });
}));

passport.deserializeUser(function(id, done) {
	db.get('SELECT ID, USERNAME FROM ADMIN WHERE ID = ?', id, function(err, row) {
	if (!row) return done(null, false);
		return done(null, row);
	});
});

passport.serializeUser(function(user, done) {
  return done(null, user.ID);
});

router.post('/', passport.authenticate('local'), function(req, res) {

  // Print posted login form data. 
  console.log('yes');
  console.log(req.body);

  res.jason({
    'msg': 'success!'
  });
});

module.exports = router;
