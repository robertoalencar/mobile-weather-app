import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CurrentWeather from '../../components/currentweather/CurrentWeather';
import Header from "../../components/header/Header";
import { getWeather } from "../../services/WeatherApi";
import HomeStyles from './HomeStyles';

export default function Home () {

    const [city, setCity] = useState('Loading ...');
    const [weather, setWeather] = useState();
    const [today, setToday] = useState();

    useEffect(()=> {
    
        let city = 'Recife'

        getWeather(city).then((response) => {

            setCity(city)
            setWeather(response)
            setToday(response.forecast[0])

        });

    }, []);

    return (

        <ScrollView style={[HomeStyles.home, HomeStyles.backgroundClaro]}>

            <Header city={city} />

            <CurrentWeather
                condition={today?.condition}
                temp={weather?.temp}
                description={weather?.description}
                max={today?.max}
                min={today?.min}
            />

        </ScrollView>
    );
}