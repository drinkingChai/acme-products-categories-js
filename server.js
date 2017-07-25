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
app.use(express.static(__dirname + '/public')); //express static can resolve the path!
app.use('/categories', categories);
app.use(function(err, req, res, next) {
  // catch errors and render to error page
  res.render('error', { message: err });
})


app.get('/', function (req, res) {
  res.render('index', { categories: db.getCategoryNames() });
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`listening on port: ${port}`);
})
