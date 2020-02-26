import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import Slider from 'react-native-slider';

import { Button, Block, Text, Divider, Switch } from '../Components';
import { fakedata } from '../Data/FakeData';
import { Themes } from '../Assets/Themes';

export default class Preferences extends Component {
  state = {
    budget: 850,
    monthly: 2000,
    notifications: true,
    newsletter: false,
    editing: null,
    profile: {}
  };

  componentDidMount() {
    this.setState({ profile: this.props.profile });
  }

  handleEdit(name, text) {
    const { profile } = this.state;
    profile[name] = text;

    this.setState({ profile });
  }

  toggleEdit(name) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  }

  renderEdit(name) {
    const { profile, editing } = this.state;

    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={text => this.handleEdit([name], text)}
        />
      );
    }

    return <Text bold>{profile[name]}</Text>;
  }

  render() {
    const { profile, editing } = this.state;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Preferences
          </Text>
          <Button>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Username
                </Text>
                {this.renderEdit('username')}
              </Block>
              <Text
                medium
                secondary
                onPress={() => this.toggleEdit('username')}
              >
                {editing === "username" ? "Save" : "Edit"}
              </Text>
            </Block>

            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  Location
                </Text>
                {this.renderEdit("location")}
              </Block>
              <Text
                medium
                secondary
                onPress={() => this.toggleEdit('location')}
              >
                {editing === "location" ? "Save" : "Edit"}
              </Text>
            </Block>

            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Text gray2 style={{ marginBottom: 10 }}>
                  E-Mail
                </Text>
                <Text bold>{profile.email}</Text>
              </Block>
            </Block>
          </Block>

          <Divider margin={[Themes.sizes.base, Themes.sizes.base * 2]} />

          <Block style={styles.sliders}>
            <Block margin={[10, 0]}>
              <Text gray style={{ marginBottom: 10 }}>
                Budget
              </Text>
              <Slider
                minimumValue={0}
                maximumValue={1000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={Themes.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.budget}
                onValueChange={value => this.setState({ budget: value })}
              />
              <Text caption gray right>
                $1,000
              </Text>
            </Block>

            <Block margin={[10, 0]}>
              <Text gray2 style={{ marginBottom: 10 }}>
                Monthly Cap
              </Text>
              <Slider
                minimumValue={0}
                maximumValue={5000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.monthly}
                onValueChange={value => this.setState({ monthly: value })}
              />
              <Text caption gray right>
                $5,000
              </Text>
            </Block>
          </Block>

          <Divider />

          <Block style={styles.toggles}>
            <Block
              row
              center
              space="between"
              style={{ marginBottom: Themes.sizes.base * 2 }}
            >
              <Text gray2>
                Notifications
              </Text>
              <Switch
                value={this.state.notifications}
                onValueChange={value => this.setState({ notifications: value })} 
              />
            </Block>

            <Block
              row
              center
              space="between"
              style={{ marginBottom: Themes.sizes.base * 2 }}
            >
              <Text gray2>Newsletter</Text>
              <Switch
                value={this.state.newsletter}
                onValueChange={value => this.setState({ newsletter: value })}
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
};

Preferences.defaultProps = {
  profile: fakedata.profile
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Themes.sizes.base * 2
  },
  avatar: {
    height: Themes.sizes.base * 2.2,
    width: Themes.sizes.base * 2.2
  },
  inputs: {
    marginTop: Themes.sizes.base * 0.7,
    paddingHorizontal: Themes.sizes.base * 2
  },
  inputRow: {
    alignItems: "flex-end"
  },
  sliders: {
    marginTop: Themes.sizes.base * 0.7,
    paddingHorizontal: Themes.sizes.base * 2
  },
  thumb: {
    width: Themes.sizes.base,
    height: Themes.sizes.base,
    borderRadius: Themes.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: Themes.colors.secondary
  },
  toggles: {
    paddingHorizontal: Themes.sizes.base * 2
  }
});

