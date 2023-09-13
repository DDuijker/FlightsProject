namespace FlightsProject.ReadModels
{
    public record FlightRm(
        //Guid => Globally unique identifier
        Guid Id,
        string Airline,
        string Price,
        TimePlaceRm Departure,
        TimePlaceRm Arrival,
        int RemainingNumberOfSeats
        );
}
