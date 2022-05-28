const express = require('express');
const router = express.Router();

// router.use(mylogger);

router.get('/', (req, res) =>{
  res.send('<h1>User</h1>');
});

router.get('/info', mylogger, (req, res) => {
  res.send('<h1>User info</h1>');
});

function mylogger (req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;

