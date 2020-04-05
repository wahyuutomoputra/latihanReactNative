import React, { useState, useCallback }  from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import { get } from '../api/api';
import { Input } from 'react-native-elements';

const DetailKontak = ({ route }) => {
    const { data } = route.params;
    console.log(data)
    
    return(
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Header title="Detail Kontak" back />
          <View style={{marginTop: 15, padding: 10}}>
            <Input
             editable={false}
             multiline={true}
             value={data.title}
             containerStyle={{
                marginBottom: 10
              }}
            />
            <Input
             editable={false}
             multiline={true}
             value={data.body}
             containerStyle={{
                marginBottom: 10
              }}
            />
          </View>
        </View>
    )
}

export default DetailKontak;