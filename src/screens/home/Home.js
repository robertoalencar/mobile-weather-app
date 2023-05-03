import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import { ActivityIndicator, LogBox, ScrollView, Text, View } from "react-native";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TemperatureToday from '../../components/temperaturetoday/TemperatureToday';
import WeatherToday from '../../components/weathertoday/WeatherToday';
import WeatherWeek from '../../components/weatherweek/WeatherWeek';
import { getWeather } from '../../services/WeatherApi';
import HomeStyles from './HomeStyles';

export default function Home () {

    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();
    const [today, setToday] = useState();
    const [forecast, setForecast] = useState([]);

    useEffect(()=> {
    
        setLoading(true)
        loadWeather('São Paulo')
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

    }, []);

    loadWeather = (newCity) => {

        setCity(newCity)

        getWeather(newCity).then((response) => {
            setWeather(response)
            setToday(response.forecast[0])
            setForecast(response.forecast)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
        })
    }

    function changeCity(newCity) {
        
        setLoading(true)
        loadWeather(newCity)
    }

    return (

        <ScrollView style={HomeStyles.home}>

            <LinearGradient
                colors={
                    weather?.currently === "noite"
                        ? ["#08244F", "#134CB5", "#0B42AB"]
                        : ["#29B2DD", "#29B2DD", "#2DC8EA"]
                }
            >

                { loading &&

                    <View style={ HomeStyles.viewLoading }>
                        <Text style={ HomeStyles.textLoading }>Carregando</Text>
                        <ActivityIndicator style={{ marginBottom: 200 }} size="large" color="#ffffff" />
                    </View>

                }

                { !loading &&
                <>

                    <Header city={city} changeCity={changeCity} />

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

                </>
                }
            
            </LinearGradient>

        </ScrollView>

    );
}