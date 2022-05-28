const express = require('express');

const router = express.Router();

function mylogger (req, res, next) {
  console.log(req.originalUrl);
  next();
}

router.get('/info', mylogger, (req, res) => {
  // res.status(500).send(`<h1>Internal Server Error!!!</h1>`);
  res.render('auth-info', {
    name: 'Whopper',
    email: 'whopper@gmail.com'
  });
});

module.exports = router;