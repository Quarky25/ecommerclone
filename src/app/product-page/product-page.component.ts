import { Component } from '@angular/core';
import { ICarsList, carList } from '../module/carList.modulel';
import { CarListService } from '../services/car-list.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
cars: ICarsList[] = carList;
cars$: Observable<ICarsList[]>
constructor(private carService: CarListService){
this.cars$ = this.carService.getCars();
}
}
