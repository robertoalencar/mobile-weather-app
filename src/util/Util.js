
export function getConditionWeatherImg(condition) {

    switch (condition) {
        
        case "rain":
            var img = require('../../assets/rain.png');
            break;
        case "cloud":
            var img = require('../../assets/cloud.png');
            break;
        case "clear_day":
            var img = require('../../assets/clear_day.png');
            break;
        case "clear_night":
            var img = require('../../assets/clear_night.png');
            break;
        case "cloudly_day":
            var img = require('../../assets/cloudly_day.png');
            break;
        case "cloudly_night":
            var img = require('../../assets/cloudly_night.png');
            break;
        case "snow":
            var img = require('../../assets/snow.png');
            break;
        case "fog":
            var img = require('../../assets/fog.png');
            break;
        case "hail":
            var img = require('../../assets/hail.png');
            break;
        case "storm":
            var img = require('../../assets/storm.png');
            break;
    }

    return img;
}