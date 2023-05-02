import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TemperatureToday from '../../components/temperaturetoday/TemperatureToday';
import WeatherToday from '../../components/weathertoday/WeatherToday';
import WeatherWeek from '../../components/weatherweek/WeatherWeek';
import { getWeather } from "../../services/WeatherApi";
import HomeStyles from './HomeStyles';

export default function Home () {

    const [city, setCity] = useState('Loading ...');
    const [weather, setWeather] = useState();
    const [today, setToday] = useState();
    const [forecast, setForecast] = useState([]);

    useEffect(()=> {
    
        let city = 'Rio de Janeiro'

        getWeather(city).then((response) => {

            setCity(city)
            setWeather(response)
            setToday(response.forecast[0])
            setForecast(response.forecast)

        });

    }, []);

    return (

        <ScrollView style={[HomeStyles.home, HomeStyles.backgroundClaro]}>

            <LinearGradient
                colors={
                    weather?.currently === "noite"
                        ? ["#08244F", "#134CB5", "#0B42AB"]
                        : ["#29B2DD", "#29B2DD", "#2DC8EA"]
                }
            >

                <Header city={city} />

                <WeatherToday
                    condition={today?.condition}
                    temp={weather?.temp}
                    description={weather?.description}
                    max={today?.max}
                    min={today?.min}
                    currently={weather?.currently}
                    humidity={weather?.humidity}
                    rain_probability={today?.rain_probability}
                    wind_speedy={weather?.wind_speedy}
                />

                <TemperatureToday
                    currently={weather?.currently}
                    day={today?.date}
                    sunrise={weather?.sunrise}
                    sunset={weather?.sunset}
                />

                <WeatherWeek
                    currently={weather?.currently}
                    forecast={forecast}
                />

                <Footer />
            
            </LinearGradient>

        </ScrollView>
    );
}