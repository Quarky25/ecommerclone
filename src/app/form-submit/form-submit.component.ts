import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrl: './form-submit.component.css'
})
export class FormSubmitComponent {

newInput = new FormGroup({
n_fName: new FormControl('', [Validators.required, Validators.minLength(3)]),
n_lName: new  FormControl('', [Validators.required, Validators.minLength(3)]),
n_eMail: new  FormControl('', [Validators.required, Validators.email, ]),
n_description: new FormControl('', [Validators.required]),
n_subject: new FormControl('',)

})

onSubmit(): void {
  if(!this.newInput.valid) {
    console.log('Form is not valid');
  }else {
    
    let validInput = this.newInput.valid;
    console.log('Form submitted', this.newInput.value);
    console.log(validInput);
  }
console.log(this.onSubmit);
}

resetForm(): void {
  this.newInput.reset
}
}
