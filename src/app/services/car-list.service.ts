import { Injectable } from '@angular/core';
import {ICarsList, carList} from '../module/carList.modulel'; 
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarListService {

  carList: ICarsList[] = carList;

  constructor() { }
private carsSubject = new BehaviorSubject<ICarsList[]>(this.carList);
private searchTermSubject = new BehaviorSubject<string>('');
searchTerm$ = this.searchTermSubject.asObservable();

  getCars(): Observable<ICarsList[]> {
    return this.carsSubject.asObservable();
  }
  
  updateSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
    this.searchCars()
  }
  searchCars(): void {
    const term = this.searchTermSubject.value.toLowerCase();
    const filteredCars = this.carList.filter(car =>
      car.brand.toLowerCase().includes(term) ||
      car.model.toLowerCase().includes(term)
    )
    this.carsSubject.next(filteredCars)
  }


shuffleArray(array:{}[]):any {
  for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

}
