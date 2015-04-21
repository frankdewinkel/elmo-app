function elmo_thermostat(route) {
	this.route = route;
	this.status = 0;
	this.min = 10;
	this.max = 30;
	this.get = function() {
		$.get(this.route, function(status) {
			this.status = status;
		});
	}
	this.set = function(status) {
		if ( typeof status !== 'number' ) {
			console.log('Invalid type: requires number');
			return;			
		}
		if( status < this.min || status > this.max) {
			console.log('Invalid input: requires value between ' + this.min + ' and ' + this.max);
			return;
		}
		$.post(this.route, {status : status}, function() {
			this.status = status;
		});		
	}		
}
