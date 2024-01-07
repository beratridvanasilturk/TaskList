import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/TaskListContext';
import Icon from 'react-native-vector-icons/Feather';

export default function MainView() {
  const { state, addNewTask } = useContext(Context);
  // Cekmek istedigimiz context'i burada useContext ile cekiyoruz.
  return (
    <View>
      <Text>MainView</Text>
      <Button title="Add New Task" onPress={addNewTask} />
      <FlatList
        data={state}
        keyExtractor={(propInArray) => propInArray.title}
        /* renderItem icerisindeki item SwiftUI'daki forEach icerisindeki her bir dongu elemanini ifade eder */
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Icon name= "trash" size={24} color="black" />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});