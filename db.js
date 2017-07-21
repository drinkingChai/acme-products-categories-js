var categories = {};

function createCategory(name) {
  categories[name] = [];
}

function deleteCategory(name) {
  delete categories[name];
}

function createProduct(category, product) {
  var cat = categories[category],
    id = cat.length ? cat[cat.length - 1].id + 1 : 1;
  cat.push({ name: product, id: id });
}

function deleteProduct(category, id) {
  categories[category] = categories[category].filter(function(item) {
    return item.id != id;
  })
}

function getCategoryNames() {
  var categoryNames = [];
  for (var k in categories) {
    categoryNames.push(k);
  }
  return categoryNames;
}

function getProductsByCategory(category) {
  return categories[category];
}


module.exports = {
  createCategory: createCategory,
  deleteCategory: deleteCategory,
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  getCategoryNames: getCategoryNames,
  getProductsByCategory: getProductsByCategory
}


// test cases / populate database
createCategory("Foo Category");
createProduct("Foo Category", "foo 1");
createProduct("Foo Category", "foo 2");
createProduct("Foo Category", "foo 3");
// console.log('added', categories["Foo Category"]);
// deleteProduct("Foo Category", 2);
// console.log('del 2', categories["Foo Category"]);
// createProduct("Foo Category", "foo 2");
// console.log('add 2', categories["Foo Category"]);
// deleteCategory("Foo Category");
// console.log("Drop Foo", categories);
// console.log(getCategoryNames());
// console.log(getProductsByCategory("Foo Category"));
createCategory("Bar Category");
createProduct("Bar Category", "bar 1");
createProduct("Bar Category", "bar 3");
