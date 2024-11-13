import { Component } from '@angular/core';
import { ICarsList, carList } from '../module/carList.modulel';
import { CarListService } from '../services/car-list.service';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  cars: ICarsList[] = carList;
  
  randCar: ICarsList[] = [] ;


  constructor(private carService: CarListService){
  
  this.randCar = this.carService.shuffleArray(this.cars)
  }
  
  

}