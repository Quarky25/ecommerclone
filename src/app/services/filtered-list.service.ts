import { Injectable } from '@angular/core';
import { ICarsList } from '../module/carList.modulel';
import { CarListService } from './car-list.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilteredListService {
private searchTermSubject = new BehaviorSubject<string>('');
searchTerm$ = this.searchTermSubject.asObservable();

updateSearchTerm(term: string) {
  this.searchTermSubject.next(term);
}
}
