import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, Text, View } from "react-native";
import WeatherTodayStyles from './WeatherTodayStyles';

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
        }

        return img;
    }

    function getBackgroundColor() {

        return (props.currently === "noite") ? "#104084" : "#0490BC"
    }

    return (

        <>

            <View style={WeatherTodayStyles.viewTop}>

                <Image source={getImage()} style={WeatherTodayStyles.imagem} />
                
                <Text style={WeatherTodayStyles.textoGrande}> {props.temp}º </Text>
                <Text style={WeatherTodayStyles.textoPequeno}> {props.description} </Text>
                <Text style={WeatherTodayStyles.textoPequeno}> Max.: {props.max}º  Min.: {props.min}º </Text>

            </View>

            <View style={[WeatherTodayStyles.viewBottom, {backgroundColor:getBackgroundColor()}]}>

                <View style={[WeatherTodayStyles.contentViewBottom]}>
                    <Entypo name="water" size={16} color="#ffffff" />
                    <Text style={WeatherTodayStyles.textoViewBottom}>{props.rain_probability}%</Text>
                </View>

                <View style={[WeatherTodayStyles.contentViewBottom, {paddingLeft:20}]}>
                    <Ionicons name="thermometer-outline" size={20} color="#fff" />
                    <Text style={WeatherTodayStyles.textoViewBottom}>{props.humidity}%</Text>
                </View>

                <View style={[WeatherTodayStyles.contentViewBottom, {paddingLeft:20}]}>
                    <Feather name="wind" size={20} color="#ffffff" />
                    <Text style={WeatherTodayStyles.textoViewBottom}>{props.wind_speedy}</Text>
                </View>

            </View>

        </>
        
    );
}