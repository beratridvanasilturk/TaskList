import { Text, View, FlatList, Button } from 'react-native'
import React, { useContext } from 'react'
import TaskListContext from '../context/TaskListContext'

export default function MainView() {
  const { data, addNewTask } = useContext(TaskListContext);
  // Cekmek istedigimiz context'i burada useContext ile cekiyoruz.
  // const sampleArray = useContext(TaskListContext);
  return (
    <View>
      <Text>MainView</Text>
      <Button title="Add New Task" onPress={addNewTask}/>
      <FlatList
        data={data}
        keyExtractor={propInArray => propInArray.title}
        /* renderItem icerisindeki item SwiftUI'daki forEach icerisindeki her bir dongu elemanini ifade eder */
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}
