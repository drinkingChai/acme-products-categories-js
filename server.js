const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser= require('body-parser');
const methodOverride = require('method-override');
const db = require('./db');
const categories = require('./routes/categories');


const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  express: app,
  noCache: true
})

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/categories', categories);


app.get('/', function (req, res) {
  res.render('index');
})






const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`listening on port: ${port}`);
})
