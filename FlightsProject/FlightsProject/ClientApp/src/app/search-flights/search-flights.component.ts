import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {
  searchResults: any = [
    "American Airlines",
    "Delta Airlines",
    "United Airlines",
    "Southwest Airlines",
    "JetBlue Airways",
    "Alaska Airlines",

  ];
}
