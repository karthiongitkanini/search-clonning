export class FlightModel
{
    Arrivaltime:string;
    Departuretime:string;
    Fare:string;
    Flightid:string;
    Duration:string;
    constructor(cArr?,cDep?,cFar?,cId?,cDur?)
    {
        this.Arrivaltime= cArr;
        this.Departuretime = cDep;
        this.Duration = cDur;
        this.Fare = cFar;
        this.Flightid = cId;

    }
}