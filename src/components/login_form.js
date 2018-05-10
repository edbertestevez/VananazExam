import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import styles from '../styles/login';
import { Container, Button, Item, Input, StyleProvider, Label } from 'native-base';
import { Formik } from 'formik';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import CustomInput from './CustomInput';

export default class LoginForm extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      	email: '',
      	password: '',
        status: true,
        emailError: true,
        passwordError: true,
        emailInput: false,
        passwordInput: false
    }
  }

  _checkEmail(email){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    this.setState({emailError: !reg.test(email), email, emailInput: true});
  }

  _checkPassword(password){
    this.setState({passwordError: password.length < 6, password, passwordInput: true});
  }

  render() {

    var disableLogin = 
      <Button block disabled style={{marginVertical: 25}}>
        <Text style={styles.text_button}>Sign In</Text>
      </Button>

    var activeLogin =
      <Button block style={{marginTop: 25}} onPress={()=>Alert.alert('Welcome User','You are now logged in')}>
        <Text style={styles.text_button}>Sign In</Text>
      </Button>
    
    var e_error = <Text style={styles.text_error}>not correct format for email address</Text>
    var p_error = <Text style={styles.text_error}>please use at least 6 - 12 characters</Text>

    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.login_form}>
          <Label>Email</Label>
          <Item regular style={styles.c_input}>
            <Input 
              placeholder='Input email address'  
              placeholderTextColor="#cacaca" 
  					  keyboardType="email-address"
              onChangeText={(email)=>this._checkEmail(email)}
            />
          </Item>
          <View style={styles.e_container}>{this.state.emailError && this.state.emailInput ? e_error : null}</View>

          <Label>Password</Label>
          <Item regular style={styles.c_input}>
            <Input 
             	placeholder='Input password' 
              placeholderTextColor="#cacaca"
              secureTextEntry
              onChangeText={(password)=>this._checkPassword(password)}
            />
          </Item>
          <View style={styles.e_container}>{this.state.passwordError && this.state.passwordInput ? p_error : null}</View>

          {this.state.emailError || this.state.passwordError ? disableLogin : activeLogin}

        </Container>
      </StyleProvider>
    );
  }
}

