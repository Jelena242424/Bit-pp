"use strict";

(function () {

    function Product(name, price, expDate) {
        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price);
        this.date = new Date(expDate);

        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[name.length - 1].toUpperCase();
            var productCode = firstLetter + lastLetter + this.id;
            return productCode + ", " + this.name + ", " + this.price;
        };
    };

    function ShoppingBag() {

        this.productList = [];

        this.addProduct = function (product) {
            if (!product || (Date.now() > product.date.getTime())) {
                console.log(product.name + " is not valid product, or product is out of date");
            } else {
                return this.productList.push(product)
            }
        }

        this.averagePrice = function () {
            var sumProductPrice = 0;
            this.productList.forEach(function(product) {
                 sumProductPrice += product.price;
            });
            var average = sumProductPrice/this.productList.length;
            return average;
        }

        this.getMostExpensive = function () {
           var sortedProducts = this.productList.slice();
           sortedProducts.sort(function(currentProduct, nextProduct) {
               return currentProduct.price - nextProduct.price
           });
           var expensiveProduct = sortedProducts[sortedProducts.length-1]
           return expensiveProduct.getInfo();
        };

        this.totalPrice = function () {
            var sumProductPrice = 0;
            this.productList.forEach(function(product) {
                 sumProductPrice += product.price;
            });
            return sumProductPrice;
        }
    }

    var mango = new Product("mango", 801.55, "8 9 2018");
    var kiwi = new Product("Kiwi", 200.85, "1 1 2018");
    var banana = new Product("banana", 123.23, '1 1 2019');
    var lemon = new Product("limun", 900, "1 1 2019");
    var jeleninShoping = new ShoppingBag();

    console.log(banana.getInfo());
    jeleninShoping.addProduct(mango);
    jeleninShoping.addProduct(kiwi);
    jeleninShoping.addProduct(banana);
    jeleninShoping.addProduct(lemon);
    jeleninShoping.averagePrice();
    console.log(jeleninShoping.averagePrice());
    console.log(jeleninShoping.getMostExpensive());
    console.log(jeleninShoping.totalPrice());
})();
