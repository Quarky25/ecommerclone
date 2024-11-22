import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICarsList } from '../module/carList.modulel';
import { CartServiceService } from '../services/cart.service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: { car: any, quantity: number }[] = [];
  total: number = 0;
  checkoutForm: FormGroup;

  constructor(private cartService: CartServiceService, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(car: ICarsList) {
    this.cartService.removeFromCart(car);
    this.updateCart();
  }

  increaseQuantity(car: any) {
    this.cartService.updateQuantity(car.car, car.quantity + 1);
    this.updateCart();
  }

  decreaseQuantity(car: any) {
    if (car.quantity > 1) { 
      this.cartService.updateQuantity(car.car, car.quantity - 1);
      this.updateCart();
    }
  }

  updateCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const { name, address } = this.checkoutForm.value;
      console.log(`Name: ${name}, Address: ${address}, Total Price: $${this.total}`);
      this.cartService.clearCart();
      this.updateCart();
    }
  }

}
