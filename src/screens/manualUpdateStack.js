import React, {useState, useEffect} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dimensions, Alert} from 'react-native';
import * as Location from 'expo-location';
import axios from "axios";
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';


const Stack = createStackNavigator();
const UpdateMetersManually = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [Latitude, setLatitude] = useState("");
    const [Longitude, setLongitude] = useState("");
    var [Imei, setImei] = useState("");
    const [loading, setLoading] = useState(false);
    const meter = {
        Longitude: Longitude.toString(),
        Latitude: Latitude.toString(),
        imei: Imei.toString()
    }
    JSON.parse(JSON.stringify(meter))

    useEffect(() => {

        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location, "location")
            setLocation(location);
            setLongitude(location.coords.longitude);
            setLatitude(location.coords.latitude);

        })();
    }, []);

    const handleScan = () => {
       setImei("");
     
        navigation.navigate('Home');
      
    ;
    }

    const handleUpdate = () => {
        console.log('DATA:::', meter)
        axios.post('https://bahari2dev.azurewebsites.net/api/Admin/UpdateGISData', meter, {
            headers: {
                'Content-Type': "application/json"
            }
        }).then(setLoading(true)).then((response) => {
            console.log(response.status)
            setLoading(false)
            Alert.alert('', JSON.stringify(response.data), [{
                    text: "Home",
                    onPress: () => handleScan()
                }]);
        }).catch((err) => {
            console.log('ERROR UPDATING:::', err)
            setLoading(false)
            Alert.alert('', "Imei Not Found", [{
                    text: "Home",
                    onPress: () => handleScan()
                }]);
        })
    }


    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={
            styles.container
        }>
            <SafeAreaView>
                <ScrollView style={
                    styles.scrollView
                }>
                          <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          textContent={'Submitting you Request'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
                    <Text style={
                        styles.label
                    }>
                       IMEI
                    </Text>
                    <TextInput placeholder="Input Imei "
                       
                        style={
                            styles.input
                        }
                       value={Imei}
                        onChangeText={
                            Imei => setImei(Imei)
                        }
                        onPress={
                            console.log(Imei)
                        }/>
                    <Text style={
                        styles.label
                    }>
                       LONGITUDE
                    </Text>
                    <Text style={
                        styles.input
                    }>
                        {Longitude}</Text>
                    <Text style={
                        styles.label
                    }>
                        LATITUDE
                    </Text>
                    <Text style={
                        styles.input
                    }>
                        {Latitude}</Text>
                    <Text>{"\n"}</Text>
                    <TouchableOpacity onPress={
                            () => handleUpdate()
                        }
                        style={
                            styles.submitButton
                    }>
                        <Text style={
                            styles.submitButtonText
                        }>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>

    );
};

export function UpdateMetersManuallyStack() {
    return (

        <Stack.Navigator>
        
            <Stack.Screen name="UpdateMeters"
                component={UpdateMetersManually} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    containerg: {
        paddingTop: 0,
        position: 'absolute',
        top: 320,
        left: 18
    },
    scrollView: {

        marginHorizontal: 20
    },
    spinnerTextStyle: {
        color: '#FFF',
      },
    inputog: {

        borderColor: '#7a42f4',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width
    },
    inputof: {

        borderColor: '#7a42f4',
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width
    },
    container: {

        width: Dimensions.get('screen').width,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0096FF'

    },
    input: {
        color:'#ffffff',
        flex: 2,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ffffff',
        paddingLeft: 30,
        
    },
    label: {
        margin: 15,
        height: 20

    },
    submitButton: {
        elevation: 1,


        backgroundColor: "linear-gradient(200deg, rgba(29,196,233,1) 0%, rgba(22,101,216,1) 35%, rgba(0,212,255,1) 100%)",

        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    submitButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default UpdateMetersManuallyStack ;
