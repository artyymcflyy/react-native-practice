import HomeScreen from '../container/screens/HomeScreen/HomeScreen';
import TabsNavigator from '../container/TabsNavigator';
import DetailsScreen from '../container/screens/DetailsScreen/DetailsScreen';

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
