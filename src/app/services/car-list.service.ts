import { Injectable } from '@angular/core';
import {ICarsList, carList} from '../module/carList.modulel'; 

@Injectable({
  providedIn: 'root'
})
export class CarListService {

  carList: ICarsList[] = carList;

  constructor() { }

  getCars(): ICarsList[] {
    return this.carList;}

  randomFromInterval(min:number, max:number) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;;
    }
   
}
