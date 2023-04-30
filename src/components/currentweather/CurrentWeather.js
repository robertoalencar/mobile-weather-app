import React from "react";
import { Image, Text, View } from "react-native";
import CurrentWeatherStyles from './CurrentWeatherStyles';

export default (props) => {

    function getImage () {

        switch (props.condition) {
            
            case "rain":
                var img = require('../../../assets/rain.png');
                break;
            case "cloud":
                var img = require('../../../assets/cloud.png');
                break;
            case "clear_day":
                var img = require('../../../assets/clear_day.png');
                break;
            case "clear_night":
                var img = require('../../../assets/clear_night.png');
                break;
            case "cloudly_day":
                var img = require('../../../assets/cloudly_day.png');
                break;
            case "cloudly_night":
                var img = require('../../../assets/cloudly_night.png');
                break;
            case "snow":
                var img = require('../../../assets/snow.png');
                break;
            case "fog":
                var img = require('../../../assets/fog.png');
                break;
            case "hail":
                var img = require('../../../assets/hail.png');
                break;
            case "storm":
                var img = require('../../../assets/storm.png');
                break;
            default:
                var img = require('../../../assets/cloudly_day.png');
                break;
        }

        return img;
    }

    return (

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <Image source={getImage()} style={CurrentWeatherStyles.imagem} />
            
            <Text style={CurrentWeatherStyles.textoGrande}> {props.temp}º </Text>
            <Text style={CurrentWeatherStyles.textoPequeno}> {props.description} </Text>
            <Text style={CurrentWeatherStyles.textoPequeno}> Max: {props.max}º  Min: {props.min}º </Text>

        </View>
        
    );
}