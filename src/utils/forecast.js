const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=5bb7cf81e38058ce0865f42a492003d7&query=' + latitude + ',' + longitude + '&units=f'

	// request ({ url: url, json: true}, (error, response) => {
	// 	if(error) {
	// 		callback('Unable to connect to weather services!', undefined)
	// 	} else if(response.body.error) {
	// 		callback('Unable to find location', undefined)
	// 	} else {
	// 		const currentTemprature = response.body.current.temperature
 // 			const currentFeelslike = response.body.current.feelslike
	// 		callback(undefined, 'It is currently ' + currentTemprature + ' degrees out. It feels like ' + currentFeelslike +' degrees out.')
	// 	}
	// })

	// Destructuring and shorthand operators
	request ({ url, json: true}, (error, { body }) => {
		if(error) {
			callback('Unable to connect to weather services!', undefined)
		} else if(body.error) {
			callback('Unable to find location', undefined)
		} else {
			const currentTemprature = body.current.temperature
 			const currentFeelslike = body.current.feelslike
			callback(undefined, 'It is currently ' + currentTemprature + ' degrees out. It feels like ' + currentFeelslike +' degrees out.')
		}
	})	
}

module.exports = forecast