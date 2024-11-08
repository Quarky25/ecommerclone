import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
>>>>>>> 65fb62f69b192fdfc91d7851edad5ecc879b6915

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
<<<<<<< HEAD
   
=======
    FormSubmitComponent,
    NavbarComponent,
    AboutUsComponent
>>>>>>> 65fb62f69b192fdfc91d7851edad5ecc879b6915
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
