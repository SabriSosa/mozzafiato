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
        this.products = this.shoppingCartService.getProducts();
    }

    ngDoCheck() {
        this.totalPrice = this.shoppingCartService.getTotalPrice();
    }

    removeProduct(product) {
        this.shoppingCartService.removeProduct(product);
    }

    removeQtyProduct(product) {
        debugger;
        this.shoppingCartService.removeQtyProduct(product);
    }

    addProduct(product) {
        this.shoppingCartService.addToCart(product);
    }

}
