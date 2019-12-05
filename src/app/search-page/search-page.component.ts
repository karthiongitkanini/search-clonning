import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/services/flight.sevice';
import { FlightModel } from 'src/models/flightsearch.model';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {

  places: string[];
  place: any
  selectSource: string = '';
  selectDestination: string = '';
  selectDate: string = '';
  flightshow: FlightModel[];

  public show: boolean = false;
  public buttonName: any = 'Show';

  constructor(private flightService: FlightService, public router: Router) {
    this.flightService.getAllPlacesFromAPI().subscribe(res => {
      this.place = res;
      console.log(this.place);
    })
  }
  minDate = new Date();
  maxDate = new Date(2019, 11, 30);

  getUrl() {
    return "url(' ')";
  }

  selectedSource(event: any) {
    this.selectSource = event.target.value;
    console.log(this.selectSource);
  }
  selectedDestination(event: any) {
    this.selectDestination = event.target.value;
    console.log(this.selectDestination);
  }
  selectedDate(event: any) {
     this.selectDate = event.target.value;
    console.log(this.selectDate);
  }
  submit() {
    this.flightService.httpRequest(this.selectDate, this.selectSource, this.selectDestination).subscribe((dat => {
      console.log(dat)
      this.flightshow = dat
      console.log(this.flightshow);

      this.show = !this.show;

      // CHANGE THE NAME OF THE BUTTON.
      if (this.show)
        this.buttonName = "Hide";
      else
        this.buttonName = "Show";

    }))
  }
  bookNow() {
    this.router.navigate(['/displayAfterBooknow']);
  }
  ngOnInit() {

  }
}
