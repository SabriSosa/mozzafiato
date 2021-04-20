import { Component, OnInit, HostListener } from '@angular/core';
import products from 'products.json';
import { Product } from '@models/product.interface';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  isDesktop = false;
  constructor(private deviceService: DeviceDetectorService) { }
  public promotionList: Product[] = products;

  promotions = this.promotionList.filter(p => p.is_promotion);

  ngOnInit(): void {
    this.isDesktop = this.deviceService.isDesktop();
  } 
  @HostListener("window:resize", [])

  onResize() {
    this.isDesktop = this.deviceService.isDesktop();
    console.log("isDesktop", this.isDesktop)

  }

}
