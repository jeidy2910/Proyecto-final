import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { STACK_NAMES } from '../constants/routes';
import { useAuth } from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  // const { user, loading } = useAuth(); // Descomentar cuando tengas auth
  const user = null; // Temporal

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name={STACK_NAMES.MAIN} component={MainNavigator} />
        ) : (
          <Stack.Screen name={STACK_NAMES.AUTH} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;