import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import products from 'products.json';
import { Product } from '@models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open(idProduct) {
    const modalRef = this.modalService.open(ProductDetailComponent);
    modalRef.componentInstance.idProduct = idProduct;
  }

  public productsList: Product[] = products;


  ngOnInit() {
  }

}
