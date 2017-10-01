import HomeScreen from './screens/HomeScreen/HomeScreen';
import TripScreen from './screens/TripScreen/TripsScreen';
import UserScreen from './screens/UserScreen/UserScreen';
import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Trips: { screen: TripScreen, },
        Users: { screen: UserScreen, },
    },
    { headerMode: 'none' }
);

export default Navigation;
