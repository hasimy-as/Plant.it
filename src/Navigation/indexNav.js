import React from 'react';
import { Image } from 'react-native'; 
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Hello from '../Screens/Hello';
// import Login from '../Screens/Login';
// import Browse from '../Screens/Browse';
// import Product from '../Screens/Product';
// import Explore from '../Screens/Explore';
// import Preferences from '../Screens/Preferences';

import { constantsTheme } from './Constants';

const screens = createStackNavigator({
    Hello,
    // Login,
    // Browse,
    // Product,
    // Explore,
    // Preferences
}, {
    defaultNavigationOptions: {
        headerStyle: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {}
    }
});

export default createAppContainer(screens);
