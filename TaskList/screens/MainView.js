import { Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import TaskListContext from '../context/TaskListContext'

export default function MainView() {
  // Cekmek istedigimiz context'i burada useContext ile cekiyoruz.
  const sampleArray = useContext(TaskListContext);
  return (
    <View>
      <Text>MainView</Text>
      <FlatList
        data={sampleArray}
        keyExtractor={propInArray => propInArray.title}
        /* renderItem icerisindeki item SwiftUI'daki forEach icerisindeki her bir dongu elemanini ifade eder */
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}
