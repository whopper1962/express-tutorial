const express = require('express');
const app = express();

const PORT = 3000;

const uesrRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const itemsRouter = require('./routes/items');

app.listen(PORT, () => console.log('Server running...'));

// app.use(express.static('public'));

app.set('view engine', 'ejs');

// app.use(mylogger);

app.get('/', (req, res) => {
  // console.log('Hello express');
  // res.send('<h1>Hello express!</h1>');
  // res.sendStatus(500);
  // res.sendStatus(404);
  // res.status(500).send('<h1>Sorry, somethting went wrong...</h1>');
  // res.status(500).json({
  //   msg: 'Sorry, somethting went wrong...',
  //   status: 500
  // });
  res.render('index', {
    text: 'Hello EJS!!'
  });
});

// Routing
app.use('/users', uesrRouter);
app.use('/auth',  authRouter);

app.use('/items', itemsRouter);

app.get('/:id', (req, res) => {
  res.send(`<h1>PARAMETER:${req.params.id}</h1>`);
});

