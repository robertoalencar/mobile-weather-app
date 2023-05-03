import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { View } from "react-native";
import HeaderStyles from "./HeaderStyles";
import PickerCity from "./PickerCity";

export default (props) => {

    const [city, changeCity] = [props.city, props.changeCity];

    return (

        <View style={HeaderStyles.viewHeader}>

            <View style={HeaderStyles.viewMap}>
                <Ionicons name="location-outline" size={24} color="#ffffff" />
                <PickerCity city={city} changeCity={changeCity} />
            </View>
            
            <Ionicons name="notifications-outline" size={24} color="#ffffff" />

        </View >
        
    );
}