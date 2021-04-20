import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import { CarouselComponent } from 'angular-responsive-carousel';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  myCarousel;

  @Input() promotions: [];
  @Input() cellsToShow: number;
  @Input() arrows: boolean;
  @Input() height: number;
  @Input() dots: boolean;
  @Input() arrowsOutside: boolean;



  @ViewChildren(CarouselComponent) carouselComponent;

  constructor(private shoppingCartService: ShoppingCartService, private alertService: AlertService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.myCarousel = this.carouselComponent.find(elem => elem.id === 'my-carousel');
  }

  requestFullscreen() {
    document.documentElement.requestFullscreen();
  }

  handleCarouselEvents(event) {
    if (event.type === 'click') {
      console.log(event);
    }
  }


  addProduct(promotion) {
    event.stopPropagation();
    this.shoppingCartService.addToCart(promotion);
    this.alertService.success('Promocion agregada al carrito');
  }

  next() {
    this.myCarousel.next();
  }

  prev() {
    this.myCarousel.prev();
  }



  select(index) {
    this.myCarousel.select(index);
  }



}
