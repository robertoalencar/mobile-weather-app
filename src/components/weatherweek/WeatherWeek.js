import { Entypo } from '@expo/vector-icons';
import React from "react";
import { ScrollView, Text, View } from "react-native";
import DayWeek from './DayWeek';
import WeatherWeekStyles from './WeatherWeekStyles';

export default (props) => {

    function getBackgroundColor() {
        
        return (props.currently === "noite") ? "#104084" : "#0490BC"
    }

    return (

        <ScrollView style={[WeatherWeekStyles.viewWeatherWeek, {backgroundColor:getBackgroundColor()}]}>

            <View style={WeatherWeekStyles.viewTop}>
                <Text style={[WeatherWeekStyles.textViewTop, {fontWeight:"bold"}]}>Next Forecast</Text>
                <Entypo name="calendar" size={24} color="#ffffff" />
            </View>

            <View style={{flex:1, marginTop: 20}}>
                {props.forecast.slice(1, 10).map((day, i) => (
                    <DayWeek key={i} day={day.weekday} max={day.max} min={day.min} condition={day.condition} />
                ))}
            </View>

        </ScrollView>

    );
}