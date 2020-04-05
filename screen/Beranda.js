import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Body from '../components/Body';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { setToken } from '../redux/action';
import firebase from 'react-native-firebase';


const Beranda = (props) => {
  const [user, setUser] = useState(null);
  let notificationListener;
  let notificationOpenedListener;

  getToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
        setToken(fcmToken)
        console.log('your token', fcmToken);
    } else {
      console.log('no token received');
    }
  }

  requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
    } catch (error) {
      console.log(error)
    }
  }

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    enabled ? getToken() : requestPermission();
  }

  messageListener = async () => {
    customNotif = () => {
      const notification = new firebase.notifications.Notification()
              .setNotificationId('notificationId')
              .setTitle('My notification title')
              .setBody('My notification body');
      return notification;
    }
    
    //saat dapat notifikasi
    notificationListener = firebase.notifications().onNotification((response) => {
      const { body, notificationId, title } = response;
      console.log('dapat')
      console.log(response)
      firebase.notifications().displayNotification(
        response.android.setChannelId('primary'));
    });

    //saat notifikasi di foreground atau background dibuka
    notificationOpenedListener = firebase.notifications().onNotificationOpened((notification) => {
      console.log(notification)
    })

    //aksi saat app di close
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if(notificationOpen){
      console.log(notificationOpen)
    }

    messageListener = firebase.messaging().onMessage((message) => {
      console.log(JSON.stringify(message));
    });
  }

  useFocusEffect(
    useCallback(() => {
      setUser(props.user);
      checkPermission();
      messageListener();

      const channel = new firebase.notifications.Android.Channel('primary', 'Primary Channel', firebase.notifications.Android.Importance.Max)
      .setDescription('iCustomer primary channel');
      firebase.notifications().android.createChannel(channel);

      return(() => {
        notificationListener()
        notificationOpenedListener()
      })
    }, [])
  );
  
    return(
      <View style={{ flex: 1, backgroundColor: '#d8e9f0' }}>
        <Header title="Home" />
        <Text style={styles.text}>Home</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  }
})

const mapStateToProps = (state) => {
  const  user  = state.user.user;
  return { user }
};

const mapDispatchToProps = () => {
  return { setToken }
}

export default connect(mapStateToProps, mapDispatchToProps)(Beranda);