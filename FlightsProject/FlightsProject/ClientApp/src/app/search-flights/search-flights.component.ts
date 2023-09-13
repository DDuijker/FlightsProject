import { Component } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent {
  searchResults: FlightRm[] = [
    {
      airline: "Air Canada",
       departure: {
        place: "Vancouver",
         time: Date.now().toString()
      },arrival: {
        place: "Toronto",
         time: Date.now().toString()

      },
     
      price: "100",
      remainingNumberOfSeats: 100
    },
    {
      airline: "KLM",
      departure: {
        place: "Amsterdam",
        time: Date.now().toString()

      },arrival: {
        place: "Berlin",
        time: Date.now().toString()
      },
      
      price: "200",
      remainingNumberOfSeats: 200
    },
    {
      airline: "Lufthansa",
      departure: {
        place: "Berlin",
        time: Date.now().toString()
      }, arrival: {
        place: "Amsterdam",
        time: Date.now().toString()
      },
      price: "300",
      remainingNumberOfSeats: 300
    }



  ];
}

export interface FlightRm {
  airline: string;
  arrival: TimePlaceRM;
  departure: TimePlaceRM;
  price: string;
  remainingNumberOfSeats: number;
}

export interface TimePlaceRM {
  place: string;
  time: string;
}
