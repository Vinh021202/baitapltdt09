import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layout1 from './View/Layout1';
import Layout2 from './View/Layout2';
import Layout3 from './View/layout3';
import Layout4 from './View/Layout4';



const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Layout1'>
        <Stack.Screen name="Layout1" component={Layout1} options={{Layout1: false}}/>
        <Stack.Screen name="Layout2" component={Layout2} options={{Layout2: false}}/>
        <Stack.Screen name="Layout3" component={Layout3} options={{Layout3: false}}/>
        <Stack.Screen name="Layout4" component={Layout4} options={{Layout4: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


