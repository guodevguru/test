import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ListScreen, AddScreen, DetailScreen } from '@screens';
import { Routes, AppNavigationParamList } from './routes';

const AppNavigator = createStackNavigator<AppNavigationParamList>();
export const AppNavigation = () => {
  return (
    <AppNavigator.Navigator initialRouteName={Routes.List}>
      <AppNavigator.Screen
        name={Routes.List}
        component={ListScreen}
        options={{ headerShown: false }}
      />
      <AppNavigator.Screen
        name={Routes.Add}
        component={AddScreen}
        options={{
          headerTitle: 'Add Item',
          headerLeftLabelVisible: false,
        }}
      />
      <AppNavigator.Screen
        name={Routes.Detail}
        component={DetailScreen}
        options={{
          headerTitle: '',
          headerLeftLabelVisible: false,
        }}
      />
    </AppNavigator.Navigator>
  );
};

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<AppNavigationParamList>>();
export const useAppRoute = <T extends Routes>() =>
  useRoute<RouteProp<AppNavigationParamList, T>>();
