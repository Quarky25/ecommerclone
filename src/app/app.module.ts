import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    FormSubmitComponent,
    NavbarComponent,
    AboutUsComponent
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
