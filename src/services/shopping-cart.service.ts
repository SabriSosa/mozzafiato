
import { Injectable } from '@angular/core';
import { ProductCart } from '../models/product.interface';

@Injectable({
    providedIn: 'root',
})

export class ShoppingCartService {
    products: ProductCart[] = [];


    addToCart(product, qty = 1) {
        this.getProductsList();
        const prodCart = new ProductCart(product);
        let newProduct = true;
        this.products.map((i, index) => {
            if (i.id === product.id) {
                this.products[index].quantity += qty;
                newProduct = false;
            }
        });
        if (newProduct) {
            prodCart.quantity = qty;
            this.products.push(prodCart);
        }
        this.saveProduct();
    }

    modifyQty(product, qty) {
        this.getProductsList();
        const prodCart = new ProductCart(product);
        this.products.map((i, index) => {
            if (i.id === product.id) {
                this.products[index].quantity = qty;
            }
        });

        this.saveProduct();
    }

    removeProduct(product: ProductCart) {
        this.getProductsList();
        this.products = this.products.filter(i => i.id !== product.id);
        this.saveProduct();
    }

    removeQtyProduct(product: ProductCart) {
        this.getProductsList();
        this.products.map((i, index) => {
            if (i.id === product.id) {
                if (this.products[index].quantity === 1) {
                    this.removeProduct(this.products[index]);
                    return;
                } else {
                    this.products[index].quantity--;
                }
            }
        });
        this.saveProduct();
    }

    getProductsList() {
        this.products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
        return this.products;
    }


    getProducts() {
        return this.getProductsList();
    }

    clearCart() {
        this.products = [];
        localStorage.removeItem('products');
    }

    getTotalPrice() {
        this.getProductsList();
        return this.products.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    getTotalProducts() {
        this.getProductsList();
        return this.products.reduce((acc, item) => acc + item.quantity, 0);

    }

    saveProduct() {
        localStorage.setItem('products', JSON.stringify(this.products));
    }

}
