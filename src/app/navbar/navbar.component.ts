import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilteredListService } from '../services/filtered-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
searchTerm = '';

constructor(private router: Router, private searchService: FilteredListService) {

}

onSearch() {
  this.searchService.updateSearchTerm(this.searchTerm);
  
}
}
