import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Block } from './src/Components/indexComp';

import Navigation from './src/Navigation/indexNav';

const images = [
  require('./src/Assets/icons/back.png'),
  require('./src/Assets/icons/plants.png'),
  require('./src/Assets/icons/seeds.png'),
  require('./src/Assets/icons/flowers.png'),
  require('./src/Assets/icons/sprayers.png'),
  require('./src/Assets/icons/pots.png'),
  require('./src/Assets/icons/fertilizers.png'),
  require('./src/Assets/images/plants_1.png'),
  require('./src/Assets/images/plants_2.png'),
  require('./src/Assets/images/plants_3.png'),
  require('./src/Assets/images/explore_1.png'),
  require('./src/Assets/images/explore_2.png'),
  require('./src/Assets/images/explore_3.png'),
  require('./src/Assets/images/explore_4.png'),
  require('./src/Assets/images/explore_5.png'),
  require('./src/Assets/images/explore_6.png'),
  require('./src/Assets/images/illustration_1.png'),
  require('./src/Assets/images/illustration_2.png'),
  require('./src/Assets/images/illustration_3.png'),
  require('./src/Assets/images/avatar.png')
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

const styles = StyleSheet.create({});