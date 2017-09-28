import HomeScreen from './screens/HomeScreen/HomeScreen';
import TripScreen from './screens/TripScreen/TripsScreen';
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Trips: { screen: TripScreen, },
    },
    { headerMode: 'none' }
);

export default Navigation;
