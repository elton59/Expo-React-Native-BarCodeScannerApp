import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Scanner from "../Components/scanner";
import UpdateMeters from "../Components/updateMeters";

const Stack = createStackNavigator();
export function HomeScreen({navigation}) {
    return (
        <View style={
            styles.container
        }>
            <View style={
                styles.circlesContainer
            }>
                <TouchableOpacity style={
                    styles.circle_1
                }/>
                <TouchableOpacity style={
                    styles.circle_2
                }/>
                <TouchableOpacity style={
                        styles.circle_3
                    }
                    onPress={
                        () => navigation.navigate('Scanner')
                    }/>
                <TouchableOpacity style={
                        styles.circle_4
                    }
                    onPress={
                        () => navigation.navigate('Scanner')
                }>
                    <Text style={
                        styles.appButtonText
                    }>Press To Onboard Meter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function HomeStack() {
    return (

        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"  options={{headerShown: false}}
                component={HomeScreen}/>
            <Stack.Screen name="Scanner"
                component={Scanner} options={{headerShown: false}}/>
            <Stack.Screen name="UpdateMeters"
                component={UpdateMeters} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


// Base radius.
const BASE_SIZE = 300
const styles = StyleSheet.create({
    circlesContainer: {
        width: BASE_SIZE,
        height: BASE_SIZE,
        alignItems: 'center'
    },
    circle_1: {
        top: 0,
        position: 'absolute',
        width: BASE_SIZE,
        height: BASE_SIZE,
        borderRadius: BASE_SIZE / 2,
        backgroundColor: '#0096FF'
    },
    circle_2: {
        top: BASE_SIZE * 0.1, // The amount remaining
        left: BASE_SIZE * 0.1,
        position: 'absolute',
        width: BASE_SIZE * 0.8, // 80% of the base size
        height: BASE_SIZE * 0.8,
        borderRadius: BASE_SIZE / 2,
        backgroundColor: '#00FFFF'
    },
    circle_3: {
        top: BASE_SIZE * 0.2,
        left: BASE_SIZE * 0.2,
        position: 'absolute',
        width: BASE_SIZE * 0.6,
        height: BASE_SIZE * 0.6, // 60% of the base size
        borderRadius: BASE_SIZE * 0.6 / 2,
        backgroundColor: '#87CEEB'
    },
    circle_4: {
        top: BASE_SIZE * 0.4,
        left: BASE_SIZE * 0.4,
        position: 'absolute',
        width: BASE_SIZE * 0.2,
        height: BASE_SIZE * 0.2, // 60% of the base size
        borderRadius: BASE_SIZE * 0.2 / 2,
        backgroundColor: '#87CEEB'
    },
    container: {
        width: Dimensions.get('screen').width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0096FF'
    },

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 15,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    },
    appButtonContainer: {
        elevation: 8,
        top: 100,
        position: 'absolute',
        backgroundColor: "linear-gradient(200deg, rgba(29,196,233,1) 0%, rgba(22,101,216,1) 35%, rgba(0,212,255,1) 100%)",

        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default HomeStack;
