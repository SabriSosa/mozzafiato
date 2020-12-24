import { Component, OnInit, DoCheck } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    constructor(private shoppingCartService: ShoppingCartService) { }
    products = [];
    clicked = false;
    totalPrice = 0;
    ngOnInit() {
    }

    ngDoCheck() {
        this.totalPrice = this.shoppingCartService.getTotalPrice();
        this.products = this.shoppingCartService.getProducts();

    }

    removeProduct(product) {
        this.shoppingCartService.removeProduct(product);
    }

    removeQtyProduct(product) {
        this.shoppingCartService.removeQtyProduct(product);
        // this.products = this.shoppingCartService.getProducts();

    }

    addProduct(product) {
        this.shoppingCartService.addToCart(product);
    }

}
