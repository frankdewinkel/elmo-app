function elmo_lamp_switch(route) {
	this.route = route;
	this.status = false;
	this.get = function() {
		$.get(this.route, function(status) {
			this.status = status;
		});
	}
	this.set = function(status) {
		if ( typeof status !== 'boolean' ) {
			console.log('Invalid type: requires boolean');
			return;			
		}		
		$.post(this.route, {status : status}, function() {
			this.status = status;
		});		
	}
}
