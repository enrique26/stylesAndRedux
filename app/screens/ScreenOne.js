/* @flow */

import React, { Component } from 'react';
import {
  View,

  StyleSheet,
} from 'react-native';
import Text from '../components/CustomText';
 
export default class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the ScreenOne component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
});
