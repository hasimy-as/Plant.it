import React, { Component } from 'react';
import { 
  Alert,
  ActivityIndicator,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView 
} from 'react-native';

import { Button, Input, Text, Block } from '../Components';
import { Themes } from '../Assets/Themes';

export default class Register extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    loading: false,
    errors: []
  };

  handleRegister() {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    if(!email) errors.push('email');
    if(!username) errors.push('username');
    if(!password) errors.push('password');

    this.setState({ errors, loading: false });

    if(!errors.length){
      Alert.alert(
        "Finally!",
        "Your account has been created.",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse")
            }
          }
        ],
        { cancelable: false }
      );
    }
  };

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors: null);

    return (
      <KeyboardAvoidingView style={styles.register} behavior="padding">
        <Block padding={[0, Themes.sizes.base * 2]}>
          <Text h1 bold>
            Register
          </Text>

          <Block middle>
            <Input 
              email
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <Input
              label="Username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors('username')]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <Input 
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({password: text})}
            />
            <Button gradient onPress={() => this.handleRegister()}>
              {loading ? (
                <ActivityIndicator size="small" color="white"/>
              ) : (
                <Text bold white center>
                  Register
                </Text>
              )}
            </Button>
            <Button onPress={() => navigation.navigate("Login")}>
              <Text
                gray
                caption
                center
                style={{textDecorationLine: "underline"}}
              >
                Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    )
  }
};

const styles = StyleSheet.create({
  register: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: Themes.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: Themes.colors.accent
  }
});