/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// rutas
import UserNavigation from './app/navigations/User';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
