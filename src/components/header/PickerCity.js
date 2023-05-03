import { Picker } from '@react-native-picker/picker';
import React from "react";
import { View } from "react-native";
import { cities } from '../../util/Util';

export default (props) => {

    return (

        <View style={{ width: "70%" }}>
            
            <Picker
                selectedValue={props.city}
                onValueChange={ (valor) => props.changeCity(valor) }
                style={{ 
                    color: "white", 
                    fontSize: 16, 
                    fontWeight: "bold", 
                }}
                
            >

                {cities.map((c) => (
                    <Picker.Item key={c.id} label={c.label} value={c.value} />
                ))}

            </Picker>

        </View>

    );
}