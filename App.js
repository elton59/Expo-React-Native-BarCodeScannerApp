import {StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import HomeStack from './src/screens/homeStack';
import UpdateMetersManuallyStack  from './src/screens/manualUpdateStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MyContextProvider from './src/context/MyContext';
const Drawer = createDrawerNavigator();

function App() {
    return (
        <>
            <StatusBar style="auto" translucent animated/>
            <MyContextProvider>
                <NavigationContainer >
                 
                    <Drawer.Navigator drawerPosition="right" name="Field Service Tool " screenOptions={{
                                headerStyle: {
                                    backgroundColor: '#0096FF',
                                  },
                                drawerLabel:"Home" ,
                                drawerStyle: {
                                    backgroundColor: '#0096FF',
                                    width: 240,
                                  },  
                                   headerTitleStyle: {
                                    fontSize: 18,
                                    color: "#fff",
                                   fontWeight: "bold",
                                     alignSelf: "center",
                                         textTransform: "uppercase"
                                  },
                                  drawerLabelStyle: {
                                    fontSize: 15,
                                    color: "#FFFFFF",
                             
    
                                        
                                  },
                
                            }}>
                        <Drawer.Screen 
                            component={HomeStack} name="Field Service Tool" 
                        
                            />
                            <Drawer.Screen 
                            component={UpdateMetersManuallyStack} name="Onboard Meter" options={{
                                drawerLabel:"Onbord Meter Manually"
                                
                            }}
                            />
                         
                        
                     
                            
                    </Drawer.Navigator>
                </NavigationContainer>
            </MyContextProvider>
        </>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
export default App;
