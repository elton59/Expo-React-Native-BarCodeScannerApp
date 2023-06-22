
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { Dimensions } from 'react-native';

export default function Navbar() {

    return (
        <View style={styles.header}>    
            <Text style={styles.headerText}>Bahari Field App</Text>
        </View>
    )
}
const styles = StyleSheet.create({  
    header: {
        position: 'absolute',
        left:     0,
        top:      0,
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "linear-gradient(200deg, rgba(29,196,233,1) 0%, rgba(22,101,216,1) 35%, rgba(0,212,255,1) 100%)",
         },
    headerText: {
       
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    }
});