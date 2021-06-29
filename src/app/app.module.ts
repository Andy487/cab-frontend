// import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxWidgetGridModule } from 'ngx-widget-grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CabBookingAsideDirective } from './cab-booking/cab-booking-aside.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabBookingComponent,
    CabBookingAsideDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([]),
    NgxWidgetGridModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
