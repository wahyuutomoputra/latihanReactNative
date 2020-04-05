import React, { useState, useCallback }  from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Body from '../components/Body';
import Header from '../components/Header';
import { useFocusEffect } from '@react-navigation/native';
import { get } from '../api/api';
import { Icon } from 'react-native-elements';

const Kontak = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    get(
      'posts',
      res => {
        let result = JSON.parse(res.data);
        setData(result)
      },
      err => {
        alert(err)
      }
    )
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const ItemList = ({items}) => {
    return(
     
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetailKontak", {data: items});
        }}
      >
        <View style={styles.item}>
          <Text>{items.title}</Text>
        </View>
      </TouchableOpacity>
      
    )
  }
    return(
      <View style={{ flex: 1, backgroundColor: '#d8e9f0' }}>
      <Header title="Kontak" />
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <ItemList 
            items={item}
          />
        )}
      />
      <Icon
        raised
        reverse
        name='plus'
        type='font-awesome'
        color='#f85f73'
        containerStyle={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
        onPress={() => {
          navigation.navigate('AddKontak')
        }} 
      />
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

export default Kontak;