import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  totalItems = 0;

  constructor(public shoppingCartService: ShoppingCartService) {

  }

  images = [
    {
      path: 'assets/images/products/1.png',

    },
    {
      path: 'assets/images/products/2.png',

    },
    {
      path: 'assets/images/products/3.png',

    },
    {
      path: 'assets/images/products/4.png',

    },


  ];

  ngDoCheck() {
    this.totalItems = this.shoppingCartService.getTotalProducts();
  }

  ngOnInit() {
  }

}
