const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 8080;
// const book = require('./app/routes/book');
const config = require('config'); //we load the db location from the JSON files
//db options

//don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
  //use morgan to log at command line
  app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.get('/', (req, res) =>
  res.json({ message: 'Welcome to Alnasoft Mocha Chai workshop!' })
);

// app.route('/book').get(book.getBooks).post(book.postBook);
// app
//   .route('/book/:id')
//   .get(book.getBook)
//   .delete(book.deleteBook)
//   .put(book.updateBook);

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app; // for testing
