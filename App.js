/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FontSize from './app/FontSize';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import loggerMiddleware from 'redux-logger';

const reducer = (state=12,action)=>{
  switch (action.type) {
    case 'INCREASE_FONT_SIZE':
      return state !== 28 ? state+4:state
    case 'DECREASE_FONT_SIZE':
      return state !== 12 ? state-4:state
      break;
    default:
    return state

  }
}
const store = createStore(reducer,applyMiddleware(loggerMiddleware))

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <FontSize ></FontSize>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
