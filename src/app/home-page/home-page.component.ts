import { Component } from '@angular/core';
import { ICarsList, carList } from '../module/carList.modulel';
import { CarListService } from '../services/car-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  cars: ICarsList[] = carList;
  car: ICarsList = {} as ICarsList
  randCar: ICarsList[] = [] ;
  index: number = 0;


  constructor(private carService: CarListService, private router: ActivatedRoute){
  this.router.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id');
    if(id !== null) {
      this.index = +id;
      this.car = this.cars[this.index]
    }
  })
  this.randCar = this.carService.shuffleArray(this.cars)
  }
  
  

}