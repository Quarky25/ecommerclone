import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "about", component: AboutUsComponent},
  {path: "cars", component: ProductPageComponent},
  {path: "cart", component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
