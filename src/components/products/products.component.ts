import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import products from 'products.json';
import { Product } from '@models/product.interface';
import { ShoppingCartService } from '@services/shopping-cart.service';
import { AlertService } from '@services/alert.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    constructor(private modalService: NgbModal, private shoppingCartService: ShoppingCartService, private alertService: AlertService) { }

    closeResult = '';

    public productsList: Product[] = products.filter(p => !p.is_promotion);

    open(idProduct) {
        const modalRef = this.modalService.open(ProductDetailComponent);
        modalRef.componentInstance.idProduct = idProduct;
    }


    ngOnInit() {
    }

    addToCart(product, event: MouseEvent) {
        event.stopPropagation();
        this.shoppingCartService.addToCart(product);
        this.alertService.success('Producto agregado al carrito');

    }

}
