import React from "react";
import { Image, Text, View } from "react-native";
import { getConditionWeatherImg } from '../../util/Util';
import DayWeekStyles from './DayWeekStyles';

export default (props) => {

    function getNameDay() {

        switch (props.day) {
            
            case "Seg":
                var nameDay = "Segunda";
                break;
            case "Ter":
                var nameDay = "Terça";
                break;
            case "Qua":
                var nameDay = "Quarta";
                break;
            case "Qui":
                var nameDay = "Quinta";
                break;
            case "Sex":
                var nameDay = "Sexta";
                break;
            case "Sáb":
                var nameDay = "Sábado";
                break;
            case "Dom":
                var nameDay = "Domingo";
                break;
        }

        return nameDay;
    }

    return (

        <View style={DayWeekStyles.viewDayWeek}>

            <View style={DayWeekStyles.itemDayWeek}>
                <Text style={{color: "#ffffff", fontWeight:"bold", fontSize: 18}}>{getNameDay()}</Text>
            </View>

            <View style={DayWeekStyles.itemDayWeek}>
                <Image source={getConditionWeatherImg(props.condition)} style={DayWeekStyles.imagem} />
            </View>

            <View style={DayWeekStyles.itemDayWeek}>
                <Text style={{color: "#ffffff", fontSize: 16}}>{props.max}°C{"   "}</Text>
                <Text style={{color: "#C0C0C0", fontSize: 16}}>{props.min}°C</Text>
            </View>

        </View>

    );
}