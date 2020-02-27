import React, { Component } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "hasimot@email.com";

export default class ForgotPassword extends Component {
  state = {
    email: VALID_EMAIL,
    errors: [],
    loading: false
  };

  handleForgetPass() {
    const { navigation } = this.props;
    const { email } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // backend check like private school check
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Password's been sent!",
        "Please check your email.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Uh oh!",
        "Please check your E-Mail.",
        [{ text: "Try again" }],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.forgot} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Forgot Password
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Button gradient onPress={() => this.handleForgetPass()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Forgot Password
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Login")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Login Page
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
