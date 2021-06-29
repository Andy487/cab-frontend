import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { RosterModel } from 'src/Model/roster.model';
import { RosterService } from 'src/Service/roster.service';

@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.scss'],
})
export class CabBookingComponent implements OnInit {
  rosterModel = new RosterModel();
  date: any = '';
  rosterDate: any = '';
 
  constructor(private rosterService: RosterService,
    // private redirect : redirectService
    ) {}

  ngOnInit(): void {
    this.date = new Date();
    console.log(this.date);
  }
  back() {
    // this.redirect.redirectTo
  }

  submit(rosterModel: NgForm) {
    console.log(this.rosterModel);
    this.rosterService.requestRoster(this.rosterModel).subscribe((data) => {
      console.log("result",data);
    });
  }
  // setdate(){

  // let date = new Date();
  // date.setDate(date.getDate() + 7);
  // this.date = this.transformDate(date);

  // this.rosterDate = this.transformDate(new Date());

  // }
  click(date: any) {
    this.date = date;
  }
}
