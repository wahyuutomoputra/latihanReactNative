import 'react-native-gesture-handler';
import * as React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import configureStore from "./redux/store";
import { Provider } from "react-redux";
const { persistor, store } = configureStore();

import { NavigationContainer } from '@react-navigation/native';
import MainRoute from './routes/MainRoute';

const App = () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
      <NavigationContainer>
        <MainRoute />
      </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}


export default App;