import { Injectable } from '@angular/core';
import { IForm } from '../module/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
private forms: IForm [] = [
  {
    fName: "",
    lName: "",
    eMail: "",
    description: "",
    subject: ""
  }
];

getForm(): IForm[] {
  return this.forms;
}

  constructor() { }
}
