import React, { useState, useCallback }  from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
import { Input, Button } from 'react-native-elements';
import { post } from '../api/api';

const AddKontak = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const sendData = () => {
        setLoading(true)
        post(
            'posts',
            {
                title: title,
                body: body,
                userId: 1
            },
            res => {
                let result = JSON.parse(res.data);
                alert("data created ")
                console.log(result)
                setTitle("");
                setBody("")
                setLoading(false)
            },
            err => {
                setLoading(false)
                console.log(err)
            }
        )
    }

    return(
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Header title="Add Kontak" back />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {loading &&(

                <View style={styles.loading}>
                  <ActivityIndicator size='large' />
                </View>
            )}
            <Input
              placeholder='Title'
              value={title}
              containerStyle={{
                  marginBottom: 10
              }}
              onChangeText={(text) => setTitle(text)}
            />
            <Input
              placeholder='Body'
              containerStyle={{
                marginBottom: 15
              }}
              onChangeText={(text) => setBody(text)}
              value={body}
            />
            <Button
              title="Submit"
              type="outline"
              onPress={() => {
                  if(body != "" && title != ""){
                      sendData();
                  }
              }}
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    item: {
      backgroundColor: "white",
      margin: 10,
      marginBottom: 0,
      padding: 20,
      borderRadius: 5
    }
  });
  

export default AddKontak;