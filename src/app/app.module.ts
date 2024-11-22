import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { FormSubmitComponent } from './form-submit/form-submit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HeroComponent } from './hero/hero.component';
<<<<<<< HEAD
import { CarDetailsComponent } from './car-details/car-details.component';
=======
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
>>>>>>> 87eeec9c16b116660759528c08dc84b561b05e0a



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    FormSubmitComponent,
    NavbarComponent,
    AboutUsComponent,
    ProductPageComponent,
    HeroComponent,
<<<<<<< HEAD
    CarDetailsComponent,
   
=======
    FooterComponent,
    CartComponent

>>>>>>> 87eeec9c16b116660759528c08dc84b561b05e0a

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
