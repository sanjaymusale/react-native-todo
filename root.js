import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/modules/home';
import SettingScreen from './src/modules/settings';
import TodoCreator from './src/modules/todo/component';
import TodoDetailScreen from './src/modules/todo/component/detail';

export const RootStack = () => {
  return createStackNavigator(
    {
      Home: HomeScreen,
      Setting: SettingScreen,
      Todo: TodoCreator,
      TodoDetail: TodoDetailScreen,
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
