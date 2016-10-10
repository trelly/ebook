/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ebook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          ebook
        </Text>
        <Text style={styles.instructions}>
          小数阅读器，侧边栏
        </Text>
        <ListView>
          <Text>一行文本</Text>
        </ListView>
      </View>
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
    paddingTop: 10,
    position: 'relative',
    top: 10
  },
});

AppRegistry.registerComponent('ebook', () => ebook);
