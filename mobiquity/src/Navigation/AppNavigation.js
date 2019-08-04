import {  createStackNavigator,createAppContainer,createSwitchNavigator } from 'react-navigation';
import {Screens} from '../Constants/NavConstants';
import SplashScreen from '../Screens/Onboarding/Splash';
import HomeScreen from '../Screens/HomeScreen/HomeScreenList';
import AddScreen from '../Screens/AddPeople/AddPeople';

const AppFlow = createStackNavigator({
  [Screens.Home]: HomeScreen,
  [Screens.AddForm]: AddScreen,
}, {
  headerMode: 'none',
});

const AppNavigation = createSwitchNavigator({
  [Screens.Splash]: SplashScreen,
  [Screens.AppFlow]:AppFlow,
}, {
  headerMode: 'none',
});


export default createAppContainer(AppNavigation);
