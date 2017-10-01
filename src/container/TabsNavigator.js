import TripScreen from './screens/TripScreen/TripsScreen';
import UserScreen from './screens/UserScreen/UserScreen';
import { TabNavigator } from "react-navigation";

const TabsNavigator = TabNavigator({
  Trips: { screen: TripScreen },
  Travelers: { screen: UserScreen },
}); 

export default TabsNavigator;