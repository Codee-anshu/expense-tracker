import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Provider } from 'react-redux';
import {useDispatch} from 'react-redux';


import IconComponent from './components/icons/IconComponent';
import RecentExpenceScreen from './screens/RecentExpenseScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import { Colors } from './assets/Colors';
import AddUpdate from './components/AddUpdate';
import { store } from './store/redux/store';
import {addExpenses, removeExpenses} from './store/redux/ExpenseSlice'
import ManageExpensesScreen from './screens/ManageExpensesScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const BottomTabNavigation = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primarySurface },
        headerTitleStyle: { color: Colors.white },
        tabBarStyle: { backgroundColor: Colors.primarySurface },
        tabBarActiveTintColor: Colors.icons,
        tabBarInactiveTintColor: Colors.white
      }}

    >
      <Tab.Screen
        name='RecentExpenses'
        component={RecentExpenceScreen}
        options={
          ({ navigation }) => ({
            title: 'Recent Expences',
            tabBarLabel: "Recent",
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color, size }) => (
              <Icon name='hourglass' size={20} color={color} />
            ),
            headerRight: () => (
              <IconComponent
                iconName={'plus'}
                size={24}
                color={Colors.white}
                onPress={() => {
                  navigation.navigate('manageExpenses')
                }} />
            ),
            headerRightContainerStyle: { paddingRight: 15 },

          })
        }
      />

      <Tab.Screen
        name='allExpenses'
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "Calendar",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: ({ color }) => (
            <Icon name='calendar-alt' size={20} color={color} />
          )
        }} />
    </Tab.Navigator>
  )
}






function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primarySurface },
              headerTitleStyle: { color: Colors.white },
              headerTintColor: Colors.white
            }}
          >
            <Stack.Screen
              name='recentExpense'
              component={BottomTabNavigation}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name='manageExpenses'
              component={ManageExpensesScreen}
              options={{
                title: 'Edit Expenses',

              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
