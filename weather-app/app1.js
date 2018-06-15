const yargs = require('yargs');
const axios   = require('axios');


const argv = yargs
.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'address to fetch weather for',
		string: true

	}

})
.help()
.alias('help','h')
.argv;


var encodeURI = encodeURIComponent(argv.address);
var geocodeURL=	`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI}&key=AIzaSyC6L5bg7kfJ6tWaBf2VPGUGAGQWg6B4yK4`;


axios.get(geocodeURL).then((response)=>{

	if(response.data.status==='ZERO_RESULTS'){
		throw new Error('unable to find address');
	}

	var lat = response.data.results[0].geometry.location.lat;
	var long = response.data.results[0].geometry.location.lng;
	console.log(response.data.results[0].formatted_address);
	var weatherurl= `https://api.darksky.net/forecast/4b8771378ad80a5bd883f1984f04455a/${lat},${long}`;

    return axios.get(weatherurl);

}).then((response)=>{
	var temp = response.data.currently.temperature;
	var apparent_temp = response.data.currently.apparentTemperature;

			console.log(`its currently ${temp} but feels like ${apparent_temp}`);


}).catch((e)=>{

	if(e.code ==='ENOTFOUND'){
			console.log('unable to find servers');


	}	

	else{
		console.log(e.message)
	}

})











