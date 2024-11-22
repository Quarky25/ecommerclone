import { Component } from '@angular/core';
import { ICarsList, carList } from '../module/carList.modulel';
import { CarListService } from '../services/car-list.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
cars: ICarsList[] = carList;
car: ICarsList = {} as ICarsList
cars$: Observable<ICarsList[]>
index: number = 0;

constructor(private carService: CarListService, private router: ActivatedRoute){
this.cars$ = this.carService.getCars();
this.router.params.subscribe(params => {
  const id = params['id']
  if(id !== null) {
    this.car = this.cars[this.index]
  }
})

}

}
