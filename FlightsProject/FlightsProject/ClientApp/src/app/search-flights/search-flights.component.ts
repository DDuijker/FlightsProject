import { Component } from '@angular/core';
import { FlightService } from '../api/services/flight.service';
import { FlightRm } from '../api/models/flight-rm';
import { OnInit } from '@angular/core'; 

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {

  searchResults: FlightRm[] = []
  //constructor take flightService
  constructor(private flightService: FlightService) { }

  //what does ngOnInit do?
  // ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component.
  
  ngOnInit(): void {
  }

  //search() method
  search() {
    //we just received it from the constructor
    this.flightService.searchFlight({})
    //this is a subscribe method, which gets excetuted when you get a response from the server
      .subscribe(response => this.searchResults = response,
      //the flightRm array is now populated with the response from the server
      this.handleError);
    
}
  private handleError(error: any) {
    console.error(error);
  }
}
