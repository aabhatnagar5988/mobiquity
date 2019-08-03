import {  createStackNavigator } from 'react-navigation';
import {Screens} from '../Constants/NavConstants';
import SplashScreen from '../Onboarding/Splash';
import HomeScreen from '../HomeScreen/HomeScreenList';
import AddScreen from '../AddPeople/AddPeople';

const AppNavigation = createStackNavigator({
  [Screens.Splash]: SplashScreen,
  [Screens.Home]: HomeScreen,
  [Screens.AddForm]: AddScreen,
}, {
  headerMode: 'none',
});

export default AppNavigation;
