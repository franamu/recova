import {createStackNavigator} from 'react-navigation-stack';
import MyAccountScreen from '../screens/MyAccount/MyAccount.js';
import RegisterScreen from '../screens/MyAccount/Register';
import LoginScreen from '../screens/MyAccount/Login';

const MyAccountStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: 'Mi Cuenta',
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: 'Login',
    }),
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => ({
      title: 'Registro',
    }),
  },
});

export default MyAccountStack;
