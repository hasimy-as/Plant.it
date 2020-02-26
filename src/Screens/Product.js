import React, { Component } from "react";
import * as Icon from '@expo/vector-icons';
import {
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { Button, Input, Block, Divider, Text } from '../Components'
import { Themes } from '../Assets/Themes';
import { fakedata } from '../Data/FakeData';

const { width, height } = Dimensions.get('window');

export default class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Icon.Entypo name="dots-three-horizontal" color={Themes.colors.gray} />
        </Button>
      )
    };
  };

  renderGallery() {
    const { product } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.8 }}
          />
        )}
      />
    );
  }

  render() {
    const { product } = this.props;

    return(
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
            {product.name}
          </Text>

          <Block flex={false} row margin={[Themes.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>

          <Text gray light height={22}>
            {product.description}
          </Text>

          <Divider margin={[Themes.sizes.padding * 0.9, 0]} />

          <Block>
            <Text semibold>Gallery</Text>
            <Block row margin={[Themes.sizes.padding * 0.9, 0]}>
              {product.images.slice(1, 3).map((image, index) => (
                <Image 
                  key={`gallery-${index}`}
                  source={image}
                  style={styles.image}
                />
              ))}

              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197,204,214,0.20)"
                style={styles.more}
                >
                  <Text gray>+{product.images.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    )
  }
};

Product.defaultProps = {
  product: fakedata.products[0]
};

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: Themes.sizes.base * 2,
    paddingVertical: Themes.sizes.padding
  },
  tag: {
    borderColor: Themes.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Themes.sizes.base,
    paddingHorizontal: Themes.sizes.base,
    paddingVertical: Themes.sizes.base / 2.5,
    marginRight: Themes.sizes.base * 0.625
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: Themes.sizes.base
  },
  more: {
    width: 55,
    height: 55
  }
});
