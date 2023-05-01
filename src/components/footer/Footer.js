import React from "react";
import { Text, View } from "react-native";
import FooterStyles from "./FooterStyles";

export default (props) => {

    return (

        <View style={FooterStyles.viewFooter}>

            <Text style={FooterStyles.textoViewFooter}> Weather App - Desenvolvido por Roberto Alencar </Text>

        </View >
        
    );
}