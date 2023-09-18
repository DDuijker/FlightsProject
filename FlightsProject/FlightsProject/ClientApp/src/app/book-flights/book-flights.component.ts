import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.css']
})
export class BookFlightsComponent implements OnInit {
  //called before properties are initialized
  constructor(private route: ActivatedRoute) {

  }

  flightId: string = "not loaded";

  //called after everything is set up 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => 
      this.findFlight(params.get('flightId')));
  }

  // sets the flightId to the passed flightId
  private findFlight = (flightId: string | null) => {
    this.flightId = flightId ?? "no id passed";
  } 

}
