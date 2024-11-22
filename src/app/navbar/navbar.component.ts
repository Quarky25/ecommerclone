import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilteredListService } from '../services/filtered-list.service';
import { CarListService } from '../services/car-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
searchTerm = '';

constructor(private router: Router, private carService: CarListService) {

}

onSearch() {
  this.carService.updateSearchTerm(this.searchTerm);
  
}
}
