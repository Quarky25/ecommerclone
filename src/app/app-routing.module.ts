import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
<<<<<<< HEAD
import { CarDetailsComponent } from './car-details/car-details.component';
=======
import { CartComponent } from './cart/cart.component';
>>>>>>> 87eeec9c16b116660759528c08dc84b561b05e0a



const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "about", component: AboutUsComponent},
  {path: "cars", component: ProductPageComponent},
<<<<<<< HEAD
  {path: "details/:id", component: CarDetailsComponent}

=======
  {path: "cart", component: CartComponent},
{path: "product-page", component: ProductPageComponent},
>>>>>>> 87eeec9c16b116660759528c08dc84b561b05e0a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
