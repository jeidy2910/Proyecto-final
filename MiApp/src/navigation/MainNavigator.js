import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { ROUTES, TAB_ROUTES } from '../constants/routes';
import { COLORS } from '../styles/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack para Home con sus subpantallas
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    <Stack.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
  </Stack.Navigator>
);

// Stack para Profile
const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
  </Stack.Navigator>
);

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === TAB_ROUTES.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === TAB_ROUTES.PROFILE) {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name={TAB_ROUTES.HOME} 
        component={HomeStack}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen 
        name={TAB_ROUTES.PROFILE} 
        component={ProfileStack}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;