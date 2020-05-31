const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+latitude+','+longitude+'.json?access_token=pk.eyJ1IjoibWF0aGV1czg2IiwiYSI6ImNqd3NlYjJzZzA3ZjI0M21xM2dsczN0YWYifQ.Dain0HQo_6TEIHkF91LQKg'
//     request({
//         url: url,
//         json: true
//     }, (error, response) => {
//         if(error){
//             callback('Unable to connect to location service', undefined)
//         }
//         else if(response.body.features.length === 0) {
//             callback('Unable find location. Try another search.', undefined)
//         }
//         else{
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/573ca43e694bf07962e990f785f08746/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast