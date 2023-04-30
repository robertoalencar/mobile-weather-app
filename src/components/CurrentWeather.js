import React from "react";
import { Image, Text, View } from "react-native";
import CurrentWeatherStyles from './CurrentWeatherStyles';

export default (props) => {

    return (

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <Image source={props.weatherToday.image} style={CurrentWeatherStyles.imagem} />
            
            <Text style={CurrentWeatherStyles.textoGrande}> {props.weatherToday.temp}º </Text>
            <Text style={CurrentWeatherStyles.textoPequeno}> {props.weatherToday.description} </Text>
            <Text style={CurrentWeatherStyles.textoPequeno}> Max: {props.weatherToday.max}º  Min: {props.weatherToday.min}º </Text>

        </View>
        
    );
}