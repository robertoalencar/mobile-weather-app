import React from "react";
import { Text, View } from "react-native";
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
            mesFormatado = 'Feb'
        } else if (mes == '03') {
            mesFormatado = 'Mar'
        } else if (mes == '04') {
            mesFormatado = 'Apr'
        } else if (mes == '05') {
            mesFormatado = 'May'
        } else if (mes == '06') {
            mesFormatado = 'Jun'
        } else if (mes == '07') {
            mesFormatado = 'Jul'
        } else if (mes == '08') {
            mesFormatado = 'Aug'
        } else if (mes == '09') {
            mesFormatado = 'Sep'
        } else if (mes == '10') {
            mesFormatado = 'Oct'
        } else if (mes == '11') {
            mesFormatado = 'Nov'
        } else if (mes == '12') {
            mesFormatado = 'Dec'
        }

        return mesFormatado + ', ' + dia;
    }

    return (

        <>

            <View style={[TemperatureTodayStyles.viewTemperature, {backgroundColor:getBackgroundColor()}]}>

                <View style={{flex:1, flexDirection:"row"}}>
                    <Text style={[TemperatureTodayStyles.textoViewTop, {fontWeight:"bold"}]}>Today</Text>
                    <Text style={TemperatureTodayStyles.textoViewTop}>{getFormatedDate()}</Text>
                </View>

            </View>

        </>
        
    );
}