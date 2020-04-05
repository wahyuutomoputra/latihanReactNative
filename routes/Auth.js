import 'react-native-gesture-handler';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from '../screen/Login';

const Auth = () => {
  return(
      <Stack.Navigator headerMode="none" initialRouteName="Login" >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  )
}

export default Auth;