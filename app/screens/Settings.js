/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';
import Text from '../components/CustomText';
import {connect} from 'react-redux';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>increase fontSize on settings and screen one </Text>
        <Button title="Increase" onPress={()=>{this.props.increaseFontSize()}}></Button>
        <Button title="Decrease" onPress={()=>{this.props.decreaseFontSize()}}></Button>
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

const mapDispatchToProps = (dispatch) => {
  return{
    increaseFontSize:() => dispatch({type:"INCREASE_FONT_SIZE"}),
    decreaseFontSize:() => dispatch({type:"DECREASE_FONT_SIZE"})
  }
}

let SettingsReduxScreen = connect(null,mapDispatchToProps)(Settings)

export default () => (
  <SettingsReduxScreen />
)
