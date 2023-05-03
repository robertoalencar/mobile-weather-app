
export function getConditionWeatherImg(condition) {

    switch (condition) {
        
        case "rain":
            var img = require('../../assets/rain.png');
            break;
        case "cloud":
            var img = require('../../assets/cloud.png');
            break;
        case "clear_day":
            var img = require('../../assets/clear_day.png');
            break;
        case "clear_night":
            var img = require('../../assets/clear_night.png');
            break;
        case "cloudly_day":
            var img = require('../../assets/cloudly_day.png');
            break;
        case "cloudly_night":
            var img = require('../../assets/cloudly_night.png');
            break;
        case "snow":
            var img = require('../../assets/snow.png');
            break;
        case "fog":
            var img = require('../../assets/fog.png');
            break;
        case "hail":
            var img = require('../../assets/hail.png');
            break;
        case "storm":
            var img = require('../../assets/storm.png');
            break;
    }

    return img;
}

export const cities = [

    { id: 1, value: 'São Paulo', label: 'São Paulo' },
    { id: 2, value: 'Aracaju', label: 'Aracaju' },
    { id: 3, value: 'Belem', label: 'Belem' },
    { id: 4, value: 'Belo Horizonte', label: 'Belo Horizonte' },
    { id: 5, value: 'Boa Vista', label: 'Boa Vista' },
    { id: 6, value: 'Brasilia', label: 'Brasilia' },
    { id: 7, value: 'Campinas', label: 'Campinas' },
    { id: 8, value: 'Campo Grande', label: 'Campo Grande' },
    { id: 9, value: 'Cuiaba', label: 'Cuiaba' },
    { id: 10, value: 'Curitiba', label: 'Curitiba' },
    { id: 11, value: 'Florianopolis', label: 'Florianopolis' },
    { id: 12, value: 'Fortaleza', label: 'Fortaleza' },
    { id: 13, value: 'Goiania', label: 'Goiania' },
    { id: 14, value: 'Joao Pessoa', label: 'Joao Pessoa' },
    { id: 15, value: 'Maceio', label: 'Maceio' },
    { id: 16, value: 'Manaus', label: 'Manaus' },
    { id: 17, value: 'Natal', label: 'Natal' },
    { id: 18, value: 'Palmas', label: 'Palmas' },
    { id: 19, value: 'Porto Alegre', label: 'Porto Alegre' },
    { id: 20, value: 'Porto Velho', label: 'Porto Velho' },
    { id: 21, value: 'Recife', label: 'Recife' },
    { id: 22, value: 'Rio de Janeiro', label: 'Rio de Janeiro' },
    { id: 23, value: 'Salvador', label: 'Salvador' },
    { id: 24, value: 'Sao Luis', label: 'Sao Luis' },
    { id: 25, value: 'Teresina', label: 'Teresina' },
    { id: 26, value: 'Vitoria', label: 'Vitoria' },

];