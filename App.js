import React from 'react';
import { Text, View, Image, StatusBar, KeyboardAvoidingView  } from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import styles from './src/styles/login';
import LoginForm from './src/components/login_form';

export default class App extends React.Component {
  render() {
    return (
          <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            <StatusBar backgroundColor="blue" barStyle="light-content"/>
            <View style={styles.fixed_center}>
              <Image source={require("./src/img/logo.png")}/>
            </View>
            <LoginForm/>
          </KeyboardAvoidingView>
      
    );
  }
}

