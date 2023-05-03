import React from "react";
import { Image, Text, View } from "react-native";
import { getConditionWeatherImg } from '../../util/Util';
import TemperatureHourStyles from "./TemperatureHourStyles";

export default (props) => {

    function getStyle() {

        if (props.selected) {
            return TemperatureHourStyles.viewItemHourSelected
        } else {
            return TemperatureHourStyles.viewItemHour
        }
    }

    return (

        <View style={getStyle()}>

            <Text style={TemperatureHourStyles.textItemHour}>{props.temperature}°C</Text>
            <Image style={TemperatureHourStyles.image} source={getConditionWeatherImg(props.condition)} />
            <Text style={TemperatureHourStyles.textItemHour}>{props.hour}</Text>

        </View>

    );
}