import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { ROUTES, NAV_STRINGS } from '../constants/routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name={ROUTES.LOGIN} 
        component={LoginScreen}
        options={{ title: NAV_STRINGS.LOGIN_TITLE }}
      />
      <Stack.Screen 
        name={ROUTES.REGISTER} 
        component={RegisterScreen}
        options={{ title: NAV_STRINGS.REGISTER_TITLE }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;