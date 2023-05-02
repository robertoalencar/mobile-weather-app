import React from "react";
import { ScrollView, Text, View } from "react-native";
import TemperatureHour from "./TemperatureHour";
import TemperatureTodayStyles from './TemperatureTodayStyles';

export default (props) => {

    function getBackgroundColor() {

        return (props.currently === "noite") ? "#104084" : "#0490BC"
    }

    function getFormatedDate() {

        let dataHoje = props.day;

        if (dataHoje == null || dataHoje == '') {
            return ''
        }

        let dia = dataHoje.substr(0,2);
        let mes = dataHoje.substr(3,5);
        let mesFormatado = '';

        if (mes == '01') {
            mesFormatado = 'Jan'
        } else if (mes == '02') {
            mesFormatado = 'Fev'
        } else if (mes == '03') {
            mesFormatado = 'Mar'
        } else if (mes == '04') {
            mesFormatado = 'Abr'
        } else if (mes == '05') {
            mesFormatado = 'Mai'
        } else if (mes == '06') {
            mesFormatado = 'Jun'
        } else if (mes == '07') {
            mesFormatado = 'Jul'
        } else if (mes == '08') {
            mesFormatado = 'Ago'
        } else if (mes == '09') {
            mesFormatado = 'Set'
        } else if (mes == '10') {
            mesFormatado = 'Out'
        } else if (mes == '11') {
            mesFormatado = 'Nov'
        } else if (mes == '12') {
            mesFormatado = 'Dez'
        }

        return mesFormatado + ', ' + dia;
    }

    return (

        <ScrollView style={[TemperatureTodayStyles.viewTemperature, {backgroundColor:getBackgroundColor()}]}>

            <View style={{flex:1, flexDirection:"row"}}>
                <Text style={[TemperatureTodayStyles.textViewTemperature, {fontWeight:"bold"}]}>Today</Text>
                <Text style={TemperatureTodayStyles.textViewTemperature}>{getFormatedDate()}</Text>
            </View>

            <View style={TemperatureTodayStyles.viewTemperatureHour}>

                <TemperatureHour temperature="29" condition="clear_day" hour="15:00" />
                <TemperatureHour temperature="26" condition="cloud" hour="16:00" />
                <TemperatureHour temperature="24" condition="cloud" hour="17:00" />
                <TemperatureHour temperature="23" condition="clear_day" hour="18:00" />

            </View>

        </ScrollView>

    );
}