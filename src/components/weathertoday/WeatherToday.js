import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, Text, View } from "react-native";
import { getConditionWeatherImg } from '../../util/Util';
import WeatherTodayStyles from './WeatherTodayStyles';

export default (props) => {

    function getBackgroundColor() {

        return (props.currently === "noite") ? "#104084" : "#0490BC"
    }

    return (

        <>

            <View style={WeatherTodayStyles.viewTop}>

                <Image source={getConditionWeatherImg(props.condition)} style={WeatherTodayStyles.imagem} />
                
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