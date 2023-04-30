import React from "react";
import { ScrollView } from "react-native";
import CurrentWeather from "../../components/CurrentWeather";
import Header from "../../components/Header";
import HomeStyles from './HomeStyles';

export default function Home () {

    const city = "Recife";

    const weatherToday = {
        image: require("../../../assets/cloudy-sun.png"),
        temp: '28',
        description: 'Precipitacions',
        max: '31',
        min: '25'
    }

    return (

        <ScrollView style={[HomeStyles.home, HomeStyles.backgroundClaro]}>

            <Header city={city} />
            <CurrentWeather weatherToday={weatherToday} />

        </ScrollView>
    );
}