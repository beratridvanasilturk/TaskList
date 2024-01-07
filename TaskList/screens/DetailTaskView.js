import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/TaskListContext'

export default function DetailTaskView( { route }) {
 // Cekmek istedigimiz context'i burada useContext ile cekiyoruz.
 // id'ye gore detay gosterme islemini yapacagimiz icin state ile id'lere erismemiz gerekiyor.
 const { state } = useContext(Context);
 // o anki id'yi print ediyoruz
 console.log(route.params.id);

 const task = state.find((task) => task.id === route.params.id);
    console.log(task);

  return (
    <View>
      <Text>{task.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})