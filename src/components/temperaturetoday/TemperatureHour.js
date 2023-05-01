import React from "react";
import { Image, Text, View } from "react-native";
import TemperatureHourStyles from './TemperatureHourStyles';

export default (props) => {

    function getImage () {

        switch (props.imagem) {
            
            case "sunrise":
                var img = require('../../../assets/sunrise.png');
                break;
            case "sunset":
                var img = require('../../../assets/sunset.png');
                break;
        }

        return img;
    }

    return (

        <View style={TemperatureHourStyles.itemHour}>

            <Text style={TemperatureHourStyles.texto}>{props.description}</Text>
            <Image style={TemperatureHourStyles.imagem} source={getImage()} />
            <Text style={TemperatureHourStyles.texto}>{props.hour}</Text>

        </View>

    );
}