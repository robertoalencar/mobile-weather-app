import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    imagem: {
        width: 180, 
        height: 180
    },

    textoGrande: {
        fontSize: 80, 
        color: "#ffffff"
    },

    textoPequeno: {
        fontSize: 18, 
        color: "#ffffff"
    },

    viewTop: {
        alignItems: 'center', 
        justifyContent: 'center'
    },

    viewBottom: {
        flex:1,
        flexDirection:"row",
        borderRadius: 29,
        padding: 15,
        textAlign:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop: 40,
        marginLeft:20,
        marginRight:20,
    },

    contentViewBottom: {
        flex:1, 
        flexDirection:"row", 
        alignItems:"center"
    },

    textoViewBottom: {
        color:"#ffffff",
        fontSize: 16,
        paddingLeft:6,
        fontWeight:"bold",
    },

})