import React from "react";
import { Text, View } from "react-native";
import FooterStyles from "./FooterStyles";

export default () => {

    return (

        <View style={FooterStyles.viewFooter}>

            <Text style={FooterStyles.textViewFooter}> Weather App - Desenvolvido por Roberto Alencar </Text>

        </View >
        
    );
}