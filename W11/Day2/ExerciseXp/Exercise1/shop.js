const products = require('./products.js');

function findProduct(productName) {
    return products.find(product => product.name === productName);
}

console.log(findProduct("Iphone 12"));
console.log(findProduct("Samsung S20"));
console.log(findProduct("Huawei P40"));