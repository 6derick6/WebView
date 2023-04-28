import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden />
      <WebView source={{uri: 'https://meuip/6derick6'}}/>
    </View>
    
  );
}

