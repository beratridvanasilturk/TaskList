/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainView from './screens/MainView';
import AddTaskView from './screens/AddTaskView';
import { TaskListProvider } from './context/TaskListContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();
  return (
    // provider'i data transferi için kullanıyoruz
    <TaskListProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Task List App" }}>
          <Stack.Screen name="Main" component={MainView} />
          <Stack.Screen name="AddTask" component={AddTaskView} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskListProvider>
  );
}

const styles = StyleSheet.create({
});

export default App;
