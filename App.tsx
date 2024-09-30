/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';


import Header from './src/Components/Header';
import Main from './src/Screen/Main';
import Bottom from './src/Components/Bottom';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e5e5e5', height:'100%', position: 'relative' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#e5e5e5" />
      <View style={{ padding: 20, flex: 1 }}> 
        <Header />
        <Main />
      </View>
      <Bottom />
    </SafeAreaView>
  );
  
}



export default App;
