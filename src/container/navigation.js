import HomeScreen from './screens/HomeScreen/HomeScreen';
import TabsNavigator from './TabsNavigator';

import { StackNavigator } from 'react-navigation';

const Navigation = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Tabs: { screen: TabsNavigator },
    },
    { headerMode: 'none' }
);

export default Navigation;
