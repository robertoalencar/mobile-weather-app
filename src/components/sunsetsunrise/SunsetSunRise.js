import React from "react";
import { Image, Text, View } from "react-native";
import SunsetSunriseStyles from "./SunsetSunriseStyles";

export default (props) => {

    function getBackgroundColor() {
        
        return (props.currently === "noite") ? "#104084" : "#0490BC"
    }

    return (

        <View style={[SunsetSunriseStyles.viewSunsetSunrise, {backgroundColor:getBackgroundColor()}]}>

            <View style={SunsetSunriseStyles.viewContent}>
                <Text style={[SunsetSunriseStyles.textSunsetSunrise, {fontWeight: 'bold'}]}> Nascer do sol </Text>
                <Text style={SunsetSunriseStyles.textSunsetSunrise}> {props.sunrise} </Text>
                <Image source={require('../../../assets/sunrise.png')} style={SunsetSunriseStyles.imagem} />
            </View>

            <View style={SunsetSunriseStyles.viewContent}>
                <Text style={[SunsetSunriseStyles.textSunsetSunrise, {fontWeight: 'bold'}]}> Pôr-do-sol </Text>
                <Text style={SunsetSunriseStyles.textSunsetSunrise}> {props.sunset} </Text>
                <Image source={require('../../../assets/sunset.png')} style={SunsetSunriseStyles.imagem} />
            </View>

        </View>
        
    );
}