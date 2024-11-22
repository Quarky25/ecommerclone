import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { carList, ICarsList } from '../module/carList.modulel';
import { CarListService } from './car-list.service';

@Injectable({
  providedIn: 'root'
})
export class FilteredListService {
carList: ICarsList[] = carList





}
