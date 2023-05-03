import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    viewSunsetSunrise: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent:"space-between",
        textAlign:"center",
        alignContent:"center",
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        marginLeft:20,
        marginRight:20,
        borderRadius: 29,
        backgroundColor: "transparent",
    },

    viewContent: {
        flex:1, 
        alignItems:"center", 
        marginTop: 10, 
        marginBottom: 10
    },

    imagem: {
        width: 80, 
        height: 80
    },

    textSunsetSunrise: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5,
        color: '#ffffff',
    },

})