function elmo_camera(route) {
	this.route = route;
	this.image = '';
	this.get = function() {
		//Get image as byte64
		$.get(this.route, function(image) {
			this.image = image;
		});
	}	
}
