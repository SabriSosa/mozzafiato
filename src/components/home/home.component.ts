import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [
    {
      path: 'assets/images/promotions/promo_1.png',
      title: 'Promo 5 + 1',
      info: 'Con la compra de 5 prosecco te llevas 1 aceite de regalo',
      link: '#'
    },
    {
      path: 'assets/images/promotions/promo_2.png',
      title: 'Promo 5 + 1',
      info: 'Con la compra de 5 prosecco te llevas 1 aceite de regalo',
      link: '#'
    },
    {
      path: 'assets/images/promotions/promo_3.png',
      title: 'Promo 5 + 1',
      info: 'Con la compra de 5 prosecco te llevas 1 aceite de regalo',
      link: '#'
    },


  ];
  ngOnInit(): void {
  }

}
