var flights = [
    {
        number: 'BA-2938',
        arrivalTime: '09:00',
        departedFrom: 'Paris',
        landed: true
    },
    {
        number: 'VIR-436',
        arrivalTime: '09:20',
        departedFrom: 'Chicago',
        landed: true
    },
    {
        number: 'AF-0982',
        arrivalTime: '10:00',
        departedFrom: 'Moscow',
        landed: true
    },
    {
        number: 'BA-1235',
        arrivalTime: '10:35',
        departedFrom: 'New York',
        landed: true
    },
    {
        number: 'UA-693',
        arrivalTime: '10:40',
        departedFrom: 'Dubai',
        landed: true
    },
    {
        number: 'EM-4598',
        arrivalTime: '11:12',
        departedFrom: 'Abu Dhabi',
        landed: false
    },
    {
        number: 'CX-0087',
        arrivalTime: '11:30',
        departedFrom: 'Toronto',
        landed: false
    },
    {
        number: 'BA-6509',
        arrivalTime: '11:45',
        departedFrom: 'Keflavik',
        landed: false
    }
];

function displayFlight( flight ) {
    var render = _.template( $( '#arrival-template' ).html() );
    flight.arrivalTime = ( moment.isMoment( flight.arrivalTime )) ? flight.arrivalTime.format( "HH:mm" ) : flight.arrivalTime;
    $( 'table#arrivals tbody' ).append( render( { flight: flight } ));
}

(function () {
    for ( var i = 0; i < flights.length; i++ ) {
        flights[i].arrivalTime = moment( flights[i].arrivalTime, "HH:mm" );
    }
})();
