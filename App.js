import React from 'react';
import { Text, View, Image, StatusBar, KeyboardAvoidingView, Animated, Keyboard  } from 'react-native';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './src/styles/login';
import LoginForm from './src/components/login_form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        imageHeight: IMAGE_HEIGHT
    }
  }

  componentWillMount () {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }

  keyboardDidShow = () => {
    this.setState({"imageHeight": IMAGE_HEIGHT_SMALL})
  };

  keyboardDidHide = () => {
    this.setState({"imageHeight": IMAGE_HEIGHT})
  };

  
  render() {
    return (
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <View style={styles.fixed_center}>
          <Animated.Image source={require("./src/img/logo.png")} style={[styles.logo, { height: this.state.imageHeight }]}/>
        </View>
        <LoginForm/>
      </KeyboardAvoidingView>
    );
  }
}

