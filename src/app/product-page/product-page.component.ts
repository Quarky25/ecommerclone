import { Component } from '@angular/core';
import { ICarsList, carList } from '../module/carList.modulel';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
cars: ICarsList[] = carList;

constructor(){

}
}
