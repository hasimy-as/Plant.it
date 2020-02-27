import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Forgot from "../screens/ForgotPassword";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Preferences from "../screens/Preferences";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Register,
    Forgot,
    Explore,
    Browse,
    Product,
    Preferences
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0
      },
      headerBackImage: <Image source={ require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
