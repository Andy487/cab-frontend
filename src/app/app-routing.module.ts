import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabBookingComponent } from './cab-booking/cab-booking.component';

const routes: Routes = [
  {
    component:CabBookingComponent,
    path:'cabBooking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
