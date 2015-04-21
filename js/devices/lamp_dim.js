function elmo_lamp_dim(route) {
	this.route = route;
	this.status = 0;
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
		if( status < 0 || status > 1) {
			console.log('Invalid input: requires value between 0 and 1');
			return;
		}
		$.post(this.route, {status : status}, function() {
			this.status = status;
		});		
	}	
}
