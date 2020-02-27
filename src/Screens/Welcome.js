import React, { Component } from 'react';
import {
  Animated,
  Image,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Button, Block, Text } from '../Components';
import { Themes } from '../Assets/Themes';

const { width, height } = Dimensions.get('window');
export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    showTerms: false
  };

  scrollX = new Animated.Value(0);

  renderTermsOfService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => this.setState({ showTerms: false })}
      >
        <Block
          padding={[Themes.sizes.padding * 2, Themes.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms of Service
          </Text>

          <ScrollView style={{ marginVertical: Themes.sizes.padding }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: Themes.sizes.base }}
            >
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>

          <Block middle padding={[Themes.sizes.base / 2, 0]}>
            <Button
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text center white>
                I understand this.
              </Text>
            </Button>
          </Block>

        </Block>
      </Modal>
    );
  }

  renderIllustrations() {
    const { illustrations } = this.props;

    return(
      <FlatList 
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        extraDate={this.state}
        data={illustrations}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({item}) => (
          <Image 
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}
        onScroll = { Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX }}
          }
        ])}
      />
    );
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);

    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 2],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "identity"
          });

          return (
            <Block 
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Your Home,
            <Text h1 primary>
              {" "}
              Greener
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: Themes.sizes.padding / 2}}>
            Enjoy the experience.
          </Text>
        </Block>

        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>

        <Block middle flex={0.5} margin={[0, Themes.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate("Login")}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button onPress={() => this.setState({ showTerms: true})}>
            <Text center caption gray>
              Terms Of Service
            </Text>
          </Button>
        </Block>
        {this.renderTermsOfService()}
      </Block>
    )
  }
};

Welcome.defaultProps = {
  illustrations: [
    {id: 1, source: require('../../assets/images/illustration_1.png')},
    {id: 2, source: require('../../assets/images/illustration_2.png')},
    {id: 3, source: require('../../assets/images/illustration_3.png')}
  ]
};

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: Themes.sizes.base * 3,
    left: 0,
    right: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
});


