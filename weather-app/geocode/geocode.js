const request = require('request');

var geocodeAddress = (address, callback )=>{


var encodeURI = encodeURIComponent(address)

request({
	url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI}&key=AIzaSyC6L5bg7kfJ6tWaBf2VPGUGAGQWg6B4yK4`,
	json:true
},(error,response,body)=>{

	if(error){
		callback('unable to connect to servers');
	}
	else if (body.status==='ZERO_RESULTS'){
		callback('unable to find address');
	}

	else if(body.status==='OK'){

	callback(undefined,
		{
			address:body.results[0].formatted_address,
			latitude: body.results[0].geometry.location.lat,
			longitude: body.results[0].geometry.location.lng,
		});
	}
});

}

module.exports.geocodeAddress = geocodeAddress;