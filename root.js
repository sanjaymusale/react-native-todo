import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/modules/home';
import SettingScreen from './src/modules/settings';

export const RootStack = () => {
  return createStackNavigator(
    {
      Home: HomeScreen,
      Setting: SettingScreen,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
    }
  );
}
