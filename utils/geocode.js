const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ adress +'.json?access_token=pk.eyJ1IjoibWF0aGV1czg2IiwiYSI6ImNqd3NlYjJzZzA3ZjI0M21xM2dsczN0YWYifQ.Dain0HQo_6TEIHkF91LQKg'
    request({
        url: url,
        json: true
    }, (error, {body}) => {
        if(error){
            callback('Unable to connect to location service', undefined)
        }
        else if(body.features.length === 0) {
            callback('Unable find location . Try another search.', undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode