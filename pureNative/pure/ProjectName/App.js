import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import AllExpenses from './Screens/AllExpenses';
import ManageExpenses from './Screens/ManageExpenses';
import RecentExpenses from './Screens/RecentExpenses';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from './Constants/Styles';
import IconButton from './Components/Ui/IconButton';
import ExpenseContextProvider from './Store/ExpenseContext';
import {useEffect, useState} from 'react';
import {init} from './Utils/Database';
import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => (
          <IconButton
            icon="add"
            color={tintColor}
            size={30}
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
      })}>
      <BottomTab.Screen
        name="RecentExpense"
        component={RecentExpenses}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent Expense',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          title: 'All Expense',
          tabBarLabel: 'All Expense',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="ExpenseOverview"
              component={ExpenseOverview}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenses}
              options={{
                title: 'Manage Expenses',
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
