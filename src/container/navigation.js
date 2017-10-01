import HomeScreen from './screens/HomeScreen/HomeScreen';
import TabsNavigator from './TabsNavigator';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';

import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Tabs: { screen: TabsNavigator },
        Details: { screen: DetailsScreen },
    },
    { headerMode: 'none' }
);

export default Navigation;
