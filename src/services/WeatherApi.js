import axios from 'axios';

export const getWeather = async (city) => {

    const { data } = await axios.get('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=' + city);
    return data.results;
}