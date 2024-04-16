// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import QRcodeScreen from './screens/QRcodeScreen'; 


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return(
    <Tab.Navigator initialRouteName='Payment'>
      <Tab.Screen name = "Settings" component={SettingsScreen} /> 
      <Tab.Screen name = "Payment" component={HomeScreen} /> 
      <Tab.Screen name = "QRcode" component={QRcodeScreen} /> 
    </Tab.Navigator>
  ); 
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Home" component={HomeStack} options={{ headerLeft: null }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
