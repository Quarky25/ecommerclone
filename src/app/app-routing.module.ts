import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contact", component: ContactUsComponent},
  {path: "submit", component: FormSubmitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
