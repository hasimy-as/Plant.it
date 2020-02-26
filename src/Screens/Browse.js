import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Card, Badge, Button, Block, Text } from "../Components";
import { fakedata } from '../Data/FakeData';
import { Themes } from '../Assets/Themes';

const { width } = Dimensions.get("window");
export default class Browse extends Component {
  state = {
    active: "Products",
    categories: []
  };

  componentDidMount() {
    this.setState({ categories: this.props.categories });
  };

  handleTab = tab => {
    const { categories } = this.props;
    const filtered = categories.filter(category => category.tags.includes(tab.toLowerCase()));

    this.setState({ active: tab, categories: filtered });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { profile, navigation } = this.props;
    const { categories } = this.state;
    const tabs = ["Products", "Inspirations", "Shop"];

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Browse
              </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: Themes.sizes.base * 2 }}
        >
          <Block flex={false} row space="between" style={styles.categories}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                onPress={() => navigation.navigate("Explore", { category })}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>
                    {category.name}
                  </Text>
                  <Text gray caption>
                    {category.count} products
                      </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Browse.defaultProps = {
  profile: fakedata.profile,
  categories: fakedata.categories
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Themes.sizes.base * 2
  },
  avatar: {
    height: Themes.sizes.base * 2.2,
    width: Themes.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: Themes.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: Themes.sizes.base,
    marginHorizontal: Themes.sizes.base * 2
  },
  tab: {
    marginRight: Themes.sizes.base * 2,
    paddingBottom: Themes.sizes.base
  },
  active: {
    borderBottomColor: Themes.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: Themes.sizes.base * 2,
    marginBottom: Themes.sizes.base * 3.5
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - Themes.sizes.padding * 2.4 - Themes.sizes.base) / 2,
    maxWidth: (width - Themes.sizes.padding * 2.4 - Themes.sizes.base) / 2,
    maxHeight: (width - Themes.sizes.padding * 2.4 - Themes.sizes.base) / 2
  }
});