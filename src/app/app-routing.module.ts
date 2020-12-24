import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from '@components/shopping-cart/shopping-cart.component';
import { HomeComponent } from '../components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/index.html',
    pathMatch: 'full',
  },
  {
    path: 'index.html',
    component: HomeComponent,
  },
  { path: 'shop', component: ShoppingCartComponent }, { path: '**', redirectTo: '/' }, // si pone cualquier URL


];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
