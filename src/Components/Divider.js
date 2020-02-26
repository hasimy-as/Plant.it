import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { Themes } from "../Assets/Themes";

export default class Divider extends Component {
  render() {
    const { color, style, ...props } = this.props;
    const dividerStyles = [styles.divider, style];

    return (
      <Block
        color={color || Themes.colors.gray2}
        style={dividerStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    margin: Themes.sizes.base * 2,
    borderBottomColor: Themes.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
