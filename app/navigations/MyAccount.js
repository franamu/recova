import {createStackNavigator} from 'react-navigation-stack';
import MyAccountScreen from '../screens/MyAccount/MyAccount.js';
import RegisterScreen from '../screens/MyAccount/Register';

const MyAccountStack = createStackNavigator({
  MyAccount: {
    screen: MyAccountScreen,
    navigationOptions: () => ({
      title: 'Mi Cuenta',
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
