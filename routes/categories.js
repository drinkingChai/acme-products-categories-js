const router = require('express').Router();

router.post('/', function(req, res) {
  res.redirect('/');
})

module.exports = router;
