const express = require('express');

const router = express.Router();

function authCheck () {
  console.log(`Auth Check!`);
}

router.get('/', authCheck, (req, res) => {
  res.render('item-list', {
    items: [
      {
        name: 'item1',
        price: 200
      },
      {
        name: 'item2',
        price: 300
      },
      {
        name: 'item3',
        price: 100
      },
    ]
  });
});

module.exports = router;