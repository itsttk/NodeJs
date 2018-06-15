const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js')

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


geocode.geocodeAddress(argv.address,(error, results)=>{

	if (error) {console.log(error);}
	else{
		console.log(results.address);
		weather.getWeather(results.latitude,results.longitude, (werror,wresults)=>{

		if(error){console.log(werror);}

		else{

			console.log(`its currently ${wresults.temperature} but feels like ${wresults.apparentTemperature}`);
		}

});
	}

});







