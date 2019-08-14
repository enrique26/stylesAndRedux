/* @flow */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';



class CustomText extends Component {
  render() {
    return (

        <Text style={{padding:10,fontSize:this.props.fontSize}}>{this.props.children}</Text>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const mapStateToProsp = (state) => {
  return {
    fontSize:state
  }
}

export default connect(mapStateToProsp)(CustomText)
