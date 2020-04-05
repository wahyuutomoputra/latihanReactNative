import React from 'react';
import { View } from 'react-native';

const Body = ({children}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#d8e9f0' }}>
            {children}
        </View>
    )
}

export default Body;