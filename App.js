import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Block } from './src/Components';

import Navigation from './src/Navigation/NavigationIndex';

const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/illustration_1.png'),
  require('./assets/images/illustration_2.png'),
  require('./assets/images/illustration_3.png'),
  require('./assets/images/avatar.png')
]

export default class App extends Component {
  state = {
    loadingComplete: false
  };

  resourceHandler = async() => {
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.loadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ loadingComplete: true })}
        />
      );
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}