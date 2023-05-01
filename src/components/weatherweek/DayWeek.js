import React from "react";
import { Image, Text, View } from "react-native";
import DayWeekStyles from './DayWeekStyles';

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

    return (

        <View style={DayWeekStyles.viewDayWeek}>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                <Text style={{color: "#ffffff", fontWeight:"bold"}}>{props.day}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                <Image source={getImage()} style={DayWeekStyles.imagem} />
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                <Text style={{color: "#ffffff"}}>{props.max}ºc{"   "}</Text>
                <Text style={{color: "#C0C0C0"}}>{props.min}ºc</Text>
            </View>

        </View>

    );
}