import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';


class ExpoCamera extends Component {
    render() {
      return <WebView source={{ uri: 'https://google.com.br' }} />;
    }
  }


export default ExpoCamera;



