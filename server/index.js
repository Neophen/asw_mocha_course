const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 8080;

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
