 import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../Screens/Welcome';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import ForgotPass from '../Screens/ForgotPass';
import Explore from '../Screens/Explore';
import Browse from '../Screens/Browse';
import Product from '../Screens/Product';
import Preferences from '../Screens/Preferences';

const screens = createStackNavigator({
    Welcome,
    Login,
    Register,
    ForgotPass,
    Explore,
    Browse,
    Product,
    Preferences
},
{
    defaultNavigationOptions: {
        headerStyle: {
            height: 16 * 4,
            elevation: 0,
            backgroundColor: '#FFFFFF',
            borderBottomColor: 'transparent',
        },
        headerBackImage: <Image source={require('../../assets/icons/back.png')} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: 16 * 2,
            paddingRight: 16
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: 16
        }
    }
});

export default createAppContainer(screens);