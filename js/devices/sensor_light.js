function elmo_sensor_light(route) {
	this.route = route;
	this.value = 0;
	this.get = function() {
		$.get(this.route, function(value) {
			this.value = value;
		});
	}	
}
