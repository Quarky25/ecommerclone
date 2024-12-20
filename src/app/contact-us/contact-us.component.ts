import { Component } from '@angular/core';
import { IForm } from '../module/form.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
formInput: IForm[] = [];

input = new FormGroup({
fName: new FormControl('', [Validators.required, Validators.minLength(3)]),
lName: new  FormControl('', [Validators.required, Validators.minLength(3)]),
eMail: new  FormControl('', [Validators.required, Validators.email, ]),
description: new FormControl('', [Validators.required]),
subject: new FormControl('')
})

constructor(private formService: FormService) {
  this.formInput = this.formService.getForm();
}

onSubmit(): void {
  if(!this.input.valid) {
    console.log('Form is not valid');
  }else {
    
    console.log('Form Submitted', this.input.value);
    
  }

}

resetForm(): void {
  this.input.reset();
}
}
