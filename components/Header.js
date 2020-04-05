import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, back }) => {
    const navigation = useNavigation();

    return(
        <View style={styles.header}>
            <StatusBar backgroundColor="#fbe8d3" barStyle="light-content" />
            {back &&(
            <Icon
              size={25}
              type="feather"
              color="white"
              iconStyle={{
                marginTop: 12,
                marginLeft: 10
              }}
              name="arrow-left" 
              onPress={() => {
                navigation.goBack();
              }}
            />
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '8%',
        backgroundColor: '#f85f73',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        //position: 'absolute',
        top: 0,
    },
    title: {
        fontSize: 20,
        margin: 10,
        marginLeft: 15,
        marginTop: 15,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Header;