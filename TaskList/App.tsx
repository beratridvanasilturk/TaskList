/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainView from './screens/MainView';
import AddTaskView from './screens/AddTaskView';
import { Provider } from './context/TaskListContext';
import DetailTaskView from './screens/DetailTaskView';
import { Button } from 'react-native';
import EditTaskView from './screens/EditTaskView';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();
  return (
    // provider'i data transferi için kullanıyoruz
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Task List App" }}>
          <Stack.Screen
            name="Main"
            component={MainView}
            options={({ navigation }) => ({
              // headerRight Swiftteki navigation bar right element butonu için kullanılıyor
              headerRight: () => (
                <Button
                  title="Add"
                  onPress={() => navigation?.navigate("AddTask")}
                />
              ),
            })}
          />
          <Stack.Screen name="AddTask" component={AddTaskView} />
          <Stack.Screen name="DetailTask" component={DetailTaskView}
          options={({ navigation }) => ({
            // headerRight Swiftteki navigation bar right element butonu için kullanılıyor
            headerRight: () => (
              <Button
                title="Edit"
                onPress={() => navigation?.navigate("EditTaskView")}
              />
            ),
          })}
          />
          <Stack.Screen name="EditTaskView" component={EditTaskView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
