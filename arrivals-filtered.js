// set the cut off time for displaying flights
var cutOffTime = moment( "10:30", "HH:mm" );

// create a counter;
var num = 0;

// loop through each of the flights
for ( num; num < flights.length; num++ ) {

    // is the flight recent?
    if ( flights[num].arrivalTime.isBefore( cutOffTime ) == false ) {

        // has the flight landed?
        if ( flights[num].landed == true ) {

            // if yes set the arrival to 'landed'
            flights[num].arrivalTime = 'LANDED';

        }

        // display the flight details
        displayFlight( flights[num] );

    }

}
