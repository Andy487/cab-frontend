import { Injectable } from '@angular/core';
import { Observable, throwError, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
url ="http://localhost:8080/saveRoster";
  constructor(
    private http: HttpClient,
    // private datePipe: DatePipe,
  ) {
  }

  //- Date 
  transformDate(date:any) {
    // return this.datePipe.transform(date, 'MM/dd/yyyy'); //whatever format you need. 
  }


// let selected  = this.reportModel.selectday; 
getFristDate(selected:any) {
    var firstday: any;
    var lastday: any;
    var curr = new Date;

    if (selected == 1) {
      firstday = new Date()
      lastday = new Date()
    }
    if (selected == 2) {
      firstday = new Date()
      lastday = new Date()
      firstday.setDate(firstday.getDate() - 1);
      lastday.setDate(lastday.getDate() - 1);
    }
    if (selected == 3) {
      firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
      lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
    }
    if (selected == 4) {
      curr.setDate(curr.getDate() - 7);
      firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
      lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
    }

    if (selected == 5) {
      curr.setDate(curr.getDate() - 14);
      firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
      lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 13));
    }
    if (selected == 6) {
      var date = new Date(), year = date.getFullYear(), month = date.getMonth();
      firstday = new Date(year, month, 1);
      lastday = new Date(year, month + 1, 0);
    }
    if (selected == 7) {
      var date = new Date(), year = date.getFullYear(), month = date.getMonth() - 1;
      firstday = new Date(year, month, 1);
      lastday = new Date(year, month + 1, 0);
    }

    if (selected == 8) {
      var date = new Date(), year = date.getFullYear(), month = date.getMonth() - 2;
      firstday = new Date(year, month, 1);
      lastday = new Date(year, month + 2, 0);
    }
    if (selected == 9) {
      var date = new Date(), year = date.getFullYear(), month = date.getMonth() - 6;
      firstday = new Date(year, month, 1);
      lastday = new Date(year, month + 6, 0);
    }
    if (selected == 10) {
      var year = curr.getFullYear();
      firstday = new Date("01/01/" + year);
      lastday = new Date("12/31/" + year);
    }
    if (selected == 11) {
      var year = curr.getFullYear() - 1;
      firstday = new Date("01/01/" + year);
      lastday = new Date("12/31/" + year);
    }
    return {
      firstday: this.transformDate(firstday),
      lastday: this.transformDate(lastday)
    };
   }
   public requestRoster(rosterModel : any): Observable<any>{
       return this.http.post(this.url ,rosterModel)
    
    
    }
}
