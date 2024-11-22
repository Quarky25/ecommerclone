import { Component } from '@angular/core';
import { carList, ICarsList } from '../module/carList.modulel';
import { CarListService } from '../services/car-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {

car: ICarsList = {} as ICarsList
index: number = 0;

constructor(private carService: CarListService, private router: ActivatedRoute) {
  this.router.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id');
    if(id !== null) {
      this.index = +id;
      this.car = carList[this.index]
    }
  })
}
}
