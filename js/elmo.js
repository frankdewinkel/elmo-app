var elmo = {
	
	host_ip 	: 'localhost',
	host_port 	: 3000,
	
	devices 	: [],
	getDevices 	: function() {
		var host = this.host_ip+':'+this.host_port; 
		$.getJSON(host, function(devices) {
			this.devices = [];
			$.each(devices, function(index,device) {
				switch(device.type) {
					case 'lamp' 
						this.devices.push(new elmo_lamp(device.route));
						break;
					case 'dim' 
						this.devices.push(new elmo_dim(device.route));
						break;
					case 'switch' 
						this.devices.push(new elmo_switch(device.route));
						break;
					case 'thermostat' 
						this.devices.push(new elmo_thermostat(device.route));
						break;
					case 'sensor_light' 
						this.devices.push(new elmo_sensor_light(device.route));
						break;
					case 'sensor_temperature' 
						this.devices.push(new elmo_sensor_temperature(device.route));
						break;
					case 'camera': 
						this.devices.push(new elmo_camera(device.route));
						break;
					default:
						console.log('Unknown device type for ' + device.route);
				}
			});
		});		
	}

};

$.when(
	$.getScript('devices/lamp_dim.js'),
	$.getScript('devices/lamp_switch.js'),
	$.getScript('devices/sensor_light.js'),
	$.getScript('devices/sensor_movement.js'),
	$.getScript('devices/sensor_temperature.js'),
	$.getScript('devices/switch.js'),
	$.getScript('devices/thermostat.js'),
	$.getScript('devices/camera.js'),
	$.Deferred(function(deferred) {
			$(deferred).resolve();
	})
).done(function() {
	//Start initialization app
});