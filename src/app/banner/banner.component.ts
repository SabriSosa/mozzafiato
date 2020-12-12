import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import { CarouselComponent } from 'angular-responsive-carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  myCarousel;

  @Input() images: [];
  @Input() cellsToShow: number;
  @Input() height: number;
  @Input() dots: boolean;
  @Input() arrowsOutside: boolean;



  @ViewChildren(CarouselComponent) carouselComponent;

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
