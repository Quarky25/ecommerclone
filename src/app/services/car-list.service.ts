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


shuffleArray(array:{}[]):any {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

}
