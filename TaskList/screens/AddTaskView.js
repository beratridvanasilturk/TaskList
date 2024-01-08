import { StyleSheet } from 'react-native'
import React from 'react'
import TaskForm from '../components/TaskForm'
import { Context } from '../context/TaskListContext';
import { useContext } from 'react';

export default function AddTaskView({ navigation }) {
  const { addNewTask } = useContext(Context);
  return (
    <TaskForm
      isEditMode={false}
      onTappedSaveButton={(title, content) => {
        // title ve content bu ekrandan addnewtask fonksiyonuna gonderiliyor ve islem sonrasi navigate ile main ekranina donuluyor.
        addNewTask(title, content, () =>
          navigation.navigate('Main'));
        console.log(title);
        console.log(content);
      }}
    />
  );
}

const styles = StyleSheet.create({})