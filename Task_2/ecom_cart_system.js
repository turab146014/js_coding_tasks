class Product {
    constructor(productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.discountValue = 0;
    }

    // Create the Discount Function
    calculateDiscount() {
        this.discountValue = this.productPrice * 0.2;
        console.log("Discount On this Product:", this.discountValue);
    }

    // Return the Price of product after discount
    priceAfterDiscount() {
        if (this.discountValue === 0) {
            this.calculateDiscount();
        }
        return this.productPrice - this.discountValue;
    }

    

    showProduct() {
        console.log("Product:", this.productName);
        console.log("Price:", this.productPrice);
    }
}

let p = new Product("Shoes", 5000);

p.showProduct();

let finalPrice = p.priceAfterDiscount();

console.log("Price After Discount:", finalPrice);