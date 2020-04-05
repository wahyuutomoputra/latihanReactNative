import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { setUser, setLogin } from '../redux/action';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const ref = React.useRef(null);

    function checkLogin() {
        console.log(username,password)
        props.setUser({username:username, password:password})
        props.setLogin(true);
        props.navigation.navigate("MainMenu")
    }

    return(
        <View style={{flex:1}}>
          <Input
            placeholder='BASIC INPUT'
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            placeholder='BASIC INPUT'
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            buttonStyle={{marginTop: 10}}
            title="Login"
            onPress={() => checkLogin()}
          />
        </View>
    )
}

export default connect(
    null,{setUser, setLogin}
)(Login);