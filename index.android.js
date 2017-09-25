import { AppRegistry } from 'react-native';
import Index from './src/Index';
import MapScreen from './src/container/screens/MapScreen/MapScreen'
import { StackNavigator } from 'react-navigation';


export const ignitePractice2017 = StackNavigator({
    Trip: { screen: Index },
    Map: { screen: MapScreen },
});

AppRegistry.registerComponent('ignitePractice2017', () => ignitePractice2017);
