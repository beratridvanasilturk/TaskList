import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import { Context } from '../context/TaskListContext';

export default function EditTaskView({ navigation, route }) {
  // Cekmek istedigimiz context'i burada useContext ile cekiyoruz.
  const { state, editTask } = useContext(Context);
  // id'ye gore detay gosterme islemini yapacagimiz icin state ile id'lere erismemiz gerekiyor.
  const id = route.params.id;
  const task = state.find((task) => task.id === route.params.id);
  console.log(task);

  return (
    <TaskForm
      isEditMode={true}
      initialValues={{ title: task.title, content: task.content }}
      onTappedSaveButton={(title, content) => {
        // title ve content bu ekrandan addnewtask fonksiyonuna gonderiliyor.
        editTask(id, title, content, () =>
          // pop bir onceki sayfaya donmeye yarar
          navigation.pop());
      }}
    />
  );
}

const styles = StyleSheet.create({})