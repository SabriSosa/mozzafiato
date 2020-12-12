import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  images = [
    {
      path1: './../assets/images/products/1.png',
      path2: './../assets/images/products/1-1.png',
      name: "Corderie Prosecco",
      price: "$40",
      old_price: "$50",
      new: true,
      promotion: false,
    },
    {
      path1: './../assets/images/products/2.png',
      path2: './../assets/images/products/2-1.png',
      name: "Antonini Ceresa Puglia Primitivo",
      price: "$40",
      old_price: "$50",
      new: false,
      description: "Antonini Ceresa Puglia Primitivo",
      promotion: true,
      promotion_discount: "40%",


    },
    {
      path1: './../assets/images/products/3.png',
      path2: './../assets/images/products/3-1.png',
      name: "Astoria Lounge Moscato",
      price: "$40",
      old_price: "$50",
      new: false,
      description: "Astoria Lounge Moscato",
      promotion: true,
      promotion_discount: "60%",


    },
    {
      path1: './../assets/images/products/4.png',
      path2: './../assets/images/products/4-1.png',
      name: "Antonini Ceresa",
      price: "$40",
      old_price: "$50",
      new: false,
      description: "Antonini Ceresa",
      promotion: false,

    },


  ];
  ngOnInit() {
  }

}
