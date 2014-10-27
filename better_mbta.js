var MBTA = {
	lines: {
		'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
		'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
		'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	},
	distanceToPark: function(line) {
	// calculate distance to park street given any line as an argument
	},
	distance: function(start_line, start_station, stop_line, stop_station)  {
	// save the user inputs in some way, maybe as properties of the MBTA object, or as vars
	// but if you want the inputs to be available for later functions, they need to be properties
	},
	calcDistances: function() {
	// all the calculations happen here
	// yes, it's possible to call/invoke a function inside of another function
	}
};

// note that here, there are no prompt pop-up windows or alerts - the input is being given directly as arguments
console.log(MBTA.distance('red', 'harvard', 'green', 'copley'));
