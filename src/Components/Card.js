import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { Themes } from "../Assets/Themes";

export default class Card extends Component {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || Themes.colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: Themes.sizes.radius,
    padding: Themes.sizes.base + 4,
    marginBottom: Themes.sizes.base
  }
});
