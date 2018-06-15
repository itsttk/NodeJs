const request= require('request');


var getWeather = (lat, long, callback)=>{

request({
url: `https://api.darksky.net/forecast/4b8771378ad80a5bd883f1984f04455a/${lat},${long}`,
json: true

},(error,response,body)=>{

	if(error){callback('unable to connet to servers');}

	else if (response.statusCode===400){callback(resonse.statusCode);}
	else if (response.statusCode===200){callback(undefined,{

		temperature: body.currently.temperature,
		apparentTemperature: body.currently.apparentTemperature

		});
	}

});

};

module.exports.getWeather = getWeather;

