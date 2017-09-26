import { AppRegistry } from 'react-native';
import Index from './src/Index';
import TripScreen from './src/container/screens/TripScreen/TripsScreen'
import { StackNavigator } from 'react-navigation';


export const ignitePractice2017 = StackNavigator({
    Home: { screen: Index },
    Trips: { screen: TripScreen, }
});

AppRegistry.registerComponent('ignitePractice2017', () => ignitePractice2017);
