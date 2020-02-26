import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Themes } from "../Assets/Themes";

class Button extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      color,
      startColor,
      endColor,
      end,
      start,
      locations,
      shadow,
      children,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style
    ];

    if (gradient) {
      return (
        <TouchableOpacity
          style={buttonStyles}
          activeOpacity={opacity}
          {...props}
        >
          <LinearGradient
            start={start}
            end={end}
            locations={locations}
            style={buttonStyles}
            colors={[startColor, endColor]}
          >
            {children}
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  startColor: Themes.colors.primary,
  endColor: Themes.colors.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: Themes.colors.white
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: Themes.sizes.radius,
    height: Themes.sizes.base * 3,
    justifyContent: "center",
    marginVertical: Themes.sizes.padding / 3
  },
  shadow: {
    shadowColor: Themes.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  accent: { backgroundColor: Themes.colors.accent },
  primary: { backgroundColor: Themes.colors.primary },
  secondary: { backgroundColor: Themes.colors.secondary },
  tertiary: { backgroundColor: Themes.colors.tertiary },
  black: { backgroundColor: Themes.colors.black },
  white: { backgroundColor: Themes.colors.white },
  gray: { backgroundColor: Themes.colors.gray },
  gray2: { backgroundColor: Themes.colors.gray2 },
  gray3: { backgroundColor: Themes.colors.gray3 },
  gray4: { backgroundColor: Themes.colors.gray4 }
});
