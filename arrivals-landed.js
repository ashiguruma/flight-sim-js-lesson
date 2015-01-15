// create a counter;
var num = 0;

// loop through each of the flights
for ( num; num < flights.length; num++ ) {

    // has the flight landed?
    if ( flights[num].landed == true ) {

        // if yes set the arrival to 'landed'
        flights[num].arrivalTime = 'LANDED';

    }

    // display the flight details
    appendFlight( flights[num] );

}
