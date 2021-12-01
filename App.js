import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
import { Start, Home, GPS, Insurance, Profile, Login, Register, ChangePassword } from './screens';



const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>

      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        "tabBarShowLabel": true,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
      initialRouteName = {'Start'}
      >
        <Stack.Screen
        options={{headerShown: false}}
        name="Start" component={Start} />
        <Stack.Screen
        options={{headerShown: false}}
        name="Login" component={Login} />
        <Stack.Screen
        options={{headerShown: false}}
        name="Register" component={Register} />
        <Stack.Screen
        options={{headerShown: true}}
        name="Change Password" component={ChangePassword} />
        <Stack.Screen 
        options={{headerShown: false}}
        name="Tabs" component={Tabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GPS" component={GPS} />
        <Stack.Screen name="Insurance" component={Insurance} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

export default App;