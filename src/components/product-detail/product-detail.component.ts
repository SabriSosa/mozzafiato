import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import products from 'products.json';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() idProduct;
  constructor(public activeModal: NgbActiveModal) { }

  public productsList: { id: string, description: string, name: string, path:string }[] = products;


  public product;

  ngOnInit() {
    this.product = this.productsList.filter(p => p.id == this.idProduct)[0];
  }

}
