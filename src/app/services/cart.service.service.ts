import { Injectable } from '@angular/core';
import {ICarsList, carList} from '../module/carList.modulel';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  carList: ICarsList[] = carList;

  constructor() { }

  private cart: { car: ICarsList, quantity: number }[] = [];

  addToCart(car: ICarsList) {
    const existingItem = this.cart.find(item => item.car.id === car.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ car, quantity: 1 });
    }
  }

  removeFromCart(car: ICarsList) {
    const index = this.cart.findIndex(item => item.car.id === car.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  updateQuantity(car: ICarsList, quantity: number) {
    const item = this.cart.find(item => item.car.id === car.id);
  if (item && quantity > 0) {  
    item.quantity = quantity;
  }
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.car.price * item.quantity), 0);
  }

}
