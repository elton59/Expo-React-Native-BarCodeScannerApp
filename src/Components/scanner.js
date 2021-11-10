import React, { useState, useEffect,useContext } from 'react';
import { Text, View, StyleSheet, Button,Alert,Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { MyContextsContext } from '../context/MyContext';


export  default  function Scanner() {
  const {setValue} = useContext(MyContextsContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData]=useState(0);
 // var [date,setDate] = useState(new Date('zh-Hans-CN'));
 // var dateS=date.toLocaleDateString();
  const navigation = useNavigation();
 // console.log("NEW updatementor_context", ctxValue)
 
  
      const handleScan=()=>
   {
        console.log("handleclick");
       navigation.navigate('UpdateMeters');   
     }

     
      
     // console.log(response.data.res);  

 
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setValue(data);
    setData(data);
    console.log(data);
    Alert.alert( 'success',
    `${data}`,
  [ 
    { text: "Cancel", onPress:() =>{navigation.popToTop()},style:'destructive'},
    { text: "Onboard Meter", onPress:() =>{handleScan()},style:'destructive'}
    
  ]
);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
 
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject} 
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}



const styles = StyleSheet.create({
  containerg: {
    paddingTop: 0,
    position: 'absolute',
    top:320,
    left:18,
   },
   inputog: {
      
    borderColor: '#7a42f4',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:Dimensions.get('screen').width,
   },
   inputof: {
      
    borderColor: '#7a42f4',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width:Dimensions.get('screen').width,
   },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
