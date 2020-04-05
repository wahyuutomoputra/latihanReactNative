import 'react-native-gesture-handler';
import * as React from 'react';
import { connect } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MainMenu from './MainMenu';
import Auth from './Auth';

const MainRoute = (props) => {
    const login = props.login
    console.log('ini dari main route',login)
    return(
        <Stack.Navigator headerMode="none" initialRouteName={login ? "MainMenu" : "Auth"}>
            <Stack.Screen name="MainMenu" component={MainMenu} />
            <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
    )
}

export default connect(state => ({
    login: state.user.login
}))(MainRoute);