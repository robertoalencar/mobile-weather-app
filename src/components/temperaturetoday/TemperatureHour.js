import React from "react";
import { Image, Text, View } from "react-native";
import { getConditionWeatherImg } from '../../util/Util';
import TemperatureHourStyles from "./TemperatureHourStyles";

export default (props) => {

    return (

        <View style={TemperatureHourStyles.viewItemHour}>

            <Text style={TemperatureHourStyles.textItemHour}>{props.temperature}°C</Text>
            <Image style={TemperatureHourStyles.image} source={getConditionWeatherImg(props.condition)} />
            <Text style={TemperatureHourStyles.textItemHour}>{props.hour}</Text>

        </View>

    );
}