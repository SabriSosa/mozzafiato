import { Component, OnInit } from '@angular/core';
import products from 'products.json';
import { Product } from '@models/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public promotionList: Product[] = products;

  promotions = this.promotionList.filter(p => p.is_promotion);

  ngOnInit(): void {

  }

}
