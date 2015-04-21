function elmo_sensor_temperature(route) {
	this.route = route;
	this.value = 0;
	this.refreshID = null;
	this.get = function() {
		$.get(this.route, function(value) {
			this.value = value;
		});
	}
	this.refresh = function(rate) {
		//Add callback?
		this.refreshId = setTimeout(this.get(),rate);
	}
	this.stop = function() {
		clearTimeout(this.refreshID);
	}
}