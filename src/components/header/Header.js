import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from "react";
import { Text, View } from "react-native";
import HeaderStyles from "./HeaderStyles";

export default (props) => {

    return (

        <View style={HeaderStyles.viewHeader}>

            <View style={HeaderStyles.viewMap}>
                <Ionicons name="location-outline" size={24} color="#ffffff" />
                <Text style={HeaderStyles.textHeader}> {props.city} </Text>
                <AntDesign name="down" size={15}  color="#ffffff" />
            </View>

            <Ionicons name="notifications-outline" size={24} color="#ffffff" />

        </View >
        
    );
}