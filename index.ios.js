/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Styles from './Styles'
export default class RNAddress extends Component {
  render() {
    return (
        <View style={[Styles.flex], Styles.container}>
          <View style={[Styles.flex, Styles.centerStyle]}>
            <Text style={Styles.textStyle}>中国</Text>
          </View>
          <View style={Styles.flex}>
            <View style={[Styles.flex, Styles.centerStyle, Styles.borderLeft, Styles.borderBottom]}>
              <Text style={Styles.textStyle}>北京</Text>
            </View>
            <View style={[Styles.flex, Styles.centerStyle, Styles.borderLeft]}>
              <Text style={Styles.textStyle}>上海</Text>
            </View>
          </View>
          <View style={Styles.flex}>
            <View style={[Styles.flex, Styles.centerStyle, Styles.borderLeft, Styles.borderBottom]}>
              <Text style={Styles.textStyle}>广州</Text>
            </View>
            <View style={[Styles.flex, Styles.centerStyle, Styles.borderLeft]}>
              <Text style={Styles.textStyle}>深圳</Text>
            </View>
          </View>
        </View>
    );
  }
}

AppRegistry.registerComponent('RNAddress', () => RNAddress);