import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import AppNavigator from '../routs/navigators/AppNavigator';

// Register the main component to the app
registerRootComponent(AppNavigator);