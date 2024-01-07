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

export default function App() {
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
            options={({ navigation, route }) => ({
              // headerRight Swiftteki navigation bar right element butonu için kullanılıyor
              headerRight: () => (
                <Button
                  title="Edit"
                  // Bu ekrandan id'yi alıyoruz ki o cell icin edit sayfasına gidebilelim
                  onPress={() => navigation.navigate('EditTask', { id: route.params.id })}
                />
              ),
            })}
          />
          <Stack.Screen name="EditTask" component={EditTaskView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

