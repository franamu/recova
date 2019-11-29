import {createStackNavigator} from 'react-navigation-stack';
import TopFiveScreen from '../screens/TopFive';

const TopFiveStack = createStackNavigator({
  TopFive: {
    screen: TopFiveScreen,
    navigationOptions: () => ({
      title: 'Top Five',
    }),
  },
});

export default TopFiveStack;
