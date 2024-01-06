import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import TaskListContext from '../context/TaskListContext'

export default function MainView() {
  const value = useContext(TaskListContext);
  return (
    <View>
      <Text>MainView {value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})