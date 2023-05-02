import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    viewTemperature: {
        flex:1,
        flexDirection:"row",
        borderRadius: 29,
        padding: 15,
        textAlign:"center",
        alignContent:"center",
        marginTop: 20,
        marginLeft:20,
        marginRight:20,
    },

    textViewTemperature: {
        fontSize: 18,
        paddingRight:200,
        paddingLeft:10,
        color:'#ffffff',
        justifyContent: 'flex-start'
    },

    viewTemperatureHour: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        width: 335,
        paddingRight:10,
        paddingLeft:10,
        paddingRight:1,
    },

})