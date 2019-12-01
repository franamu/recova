import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// rutas
import UserNavigation from './app/navigations/Navigation';

//firebase
import {firebaseApp} from './app/utils/FireBase';

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
