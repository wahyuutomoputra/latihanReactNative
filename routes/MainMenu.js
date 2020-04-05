import 'react-native-gesture-handler';
import * as React from 'react';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Beranda from '../screen/Beranda';
import Pengaturan from '../screen/Pengaturan';
import Kontak from '../screen/Kontak';
import DetailKontak from '../screen/DetailKontak';
import AddKontak from '../screen/AddKontak';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BerandaNavigator() {
    return (
      <Stack.Navigator headerMode="none" initialRouteName="Beranda">
        <Stack.Screen name="Beranda" component={Beranda} />
      </Stack.Navigator>
    );
  }
  
  const AkunNavigator = () => {
    return(
      <Stack.Navigator headerMode="none" initialRouteName="Pengaturan">
        <Stack.Screen name="Pengaturan" component={Pengaturan} />
      </Stack.Navigator>
    )
  }
  
  const KontakNavigator = () => {
    return(
      <Stack.Navigator headerMode="none" initialRouteName="Kontak">
        <Stack.Screen name="Kontak" component={Kontak} />
        <Stack.Screen name="DetailKontak" component={DetailKontak} />
        <Stack.Screen name="AddKontak" component={AddKontak} />
      </Stack.Navigator>
    )
  }

  const MainMenu = () => {
    return(
      <Tab.Navigator
        initialRouteName="BerandaTab"
        tabBarOptions={{
          activeTintColor: '#f85f73',
          showLabel: false
        }}
      >
        <Tab.Screen 
          name="BerandaTab" 
          component={BerandaNavigator} 
          options={{
            //tabBarLabel:"Beranda",
            tabBarIcon: ({color, size}) => (
              <Icon 
                name="home" 
                color={color} 
                size={size} 
              />
            )
          }}
        />
  
        <Tab.Screen 
          name="KontakTab"
          component={KontakNavigator}
          options={{
            //tabBarLabel:"Kontak",
            tabBarIcon: ({color, size}) => (
              <Icon
                name="telephone"
                type="foundation"
                size={size}
                color={color} 
              />
            )
          }}
        />
        
        <Tab.Screen 
          name="AkunTab"
          component={AkunNavigator}
          options={{
            //tabBarLabel:"Akun",
            tabBarIcon: ({color, size}) => (
              <Icon
                name="account-circle"
                size={size}
                color={color} 
              />
            )
          }}
        />
      </Tab.Navigator>
    )   
  } 

  export default MainMenu;
   