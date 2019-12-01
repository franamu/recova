import React from 'react';
// Icons
import {Icon} from 'react-native-elements';

// React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

// Local Imports
import HomeScreen from '../screens/Home';
import TopFiveScreen from '../screens/TopFive';
import SearchScreen from '../screens/Search';

// Screens my account
import MyAccountScreen from '../screens/MyAccount/MyAccount';
import RegisterScreen from '../screens/MyAccount/Register';

//  Imports stacks Navigators
import HomeScreenStack from './Home';
import TopFiveScreenStack from './TopFive';
import SearchScreenStack from './Search';
import MyAccountStack from './MyAccount';

const NavigationStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="compass-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    TopFive: {
      screen: TopFiveScreenStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Top 5',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="star-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    Search: {
      screen: SearchScreenStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Buscar',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="magnify"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
    MyAccount: {
      screen: MyAccountStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Mi cuenta',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="home-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    // define que screen va a cargar por primera vez
    initialRouteName: 'MyAccount',
    // order organiza las opciones del tab bottom
    order: ['Home', 'TopFive', 'Search', 'MyAccount'],
    tabBarOptions: {
      inactiveTintColor: '#646464',
      activeTintColor: '#03A9F4',
    },
  },
);

export default createAppContainer(NavigationStack);