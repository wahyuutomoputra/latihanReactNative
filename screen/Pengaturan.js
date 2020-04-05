import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { setLogin } from '../redux/action';
import { CommonActions } from '@react-navigation/native';

const Pengaturan = ({navigation, setLogin}) => {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Logout"
        onPress={() => {
          setLogin(false);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Auth'}]
            })
          )
        }}
      />

    </View>
    )
}

export default connect(
  null,{setLogin}
)(Pengaturan);