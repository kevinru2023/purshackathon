// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';



import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import QRcodeScreen from './screens/QRcodeScreen'; 


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStack = () => {
  return(
    <Tab.Navigator 
    initialRouteName='Payment' 
    activeColor='black'
    inactiveColor='black'
    barStyle={{ backgroundColor: '#CECECE' }}
    >
      <Tab.Screen name = "Settings" component={SettingsScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="settings" size={26} color={color} />
        ),
        
      }}
      /> 
      <Tab.Screen name = "Payment" component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={26} color={color} />
        ),
      }}
      /> 
      <Tab.Screen name = "QRcode" component={QRcodeScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="person" size={26} color={color} />
        ),
      }}
      /> 
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
