export class RosterModel {
 
  empId: string;
  routeId: string;
  tripDate: string;
  driverName: string;
  driverNumber: string;
  shift: string;
  cabId: String

  constructor() {

    this.empId = "455";
    this.routeId = "smsRoad";
    this.tripDate = '';
    this.shift = '8.30pm';

    this.driverName = 'driverName';
    this.driverNumber = '1345679';
    this.cabId = "rj14cg2345"
  }
}
