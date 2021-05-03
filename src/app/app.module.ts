import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '@components/home/home.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { BannerComponent } from '@components/banner/banner.component';
import { ProductsComponent } from '@components/products/products.component';
import { ContactComponent } from '@components/contact/contact.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ProductDetailComponent } from '@components/product-detail/product-detail.component';
import { ShoppingCartComponent } from '@components/shopping-cart/shopping-cart.component';
import { AlertComponent } from '@components/alert/alert.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
