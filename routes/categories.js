const router = require('express').Router();
const db = require('../db');

router.post('/', function(req, res) {
  var category = req.body['category'];
  if (category.trim() === '') {
    res.render('error', { message: "Blank input!" });
    return;
  }
  db.createCategory(category);
  res.redirect(`/categories/${category}/products`);
})

router.delete('/:name', function(req, res) {
  db.deleteCategory(req.params.name);
  res.redirect('/');
})

// products
router.get('/:name/products', function(req, res) {
  var category = req.params.name,
    products = db.getProductsByCategory(category);
  // catch unknown routes
  if (!products) {
    res.render('error', { message: "Category not found" });
    return;
  }
  res.render('products', { category: category,
                          products: db.getProductsByCategory(category),
                          categories: db.getCategoryNames() });
})

router.post('/:name/products', function(req, res) {
  db.createProduct(req.params.name, req.body['product']);
  res.redirect(`/categories/${req.params.name}/products`);
})

router.delete('/:name/products/:id', function(req, res) {
  db.deleteProduct(req.params.name, req.params.id);
  res.redirect(`/categories/${req.params.name}/products`);
})

module.exports = router;
