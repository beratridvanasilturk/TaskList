import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/TaskListContext';
import Icon from 'react-native-vector-icons/Feather';

export default function MainView() {
  const { state, addNewTask, deleteTask } = useContext(Context);
  // Cekmek istedigimiz context'i burada useContext ile cekiyoruz.
  return (
    <View>
      <Text>MainView</Text>
      <Button title="Add New Task" onPress={addNewTask} />
      <FlatList
        data={state}
        keyExtractor={(propInArray) => propInArray.id}
        /* renderItem icerisindeki item SwiftUI'daki forEach icerisindeki her bir dongu elemanini ifade eder */
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => 
               deleteTask(item.id)
              }>
                <Icon name="trash" size={24} color="black"/>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },

});