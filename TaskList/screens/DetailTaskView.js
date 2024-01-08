import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/TaskListContext'

export default function DetailTaskView({ route }) {
    // Cekmek istedigimiz context'i burada useContext ile cekiyoruz.
    // id'ye gore detay gosterme islemini yapacagimiz icin state ile id'lere erismemiz gerekiyor.
    const { state } = useContext(Context);
    // o anki id'yi print ediyoruz
    console.log(route.params.id);

    const task = state.find((task) => task.id === route.params.id);
    console.log(task);

    return (
        <View style={styles.mainView}>
            <View style={styles.container}>
                <Text style={styles.text}>Title:</Text>
                <Text style={styles.text2}>{task.title}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Content:</Text>
                <Text style={styles.text2}>{task.content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: 10,
    },
    container: {
        borderWidth: 0.3,
        // borderColor: 'black',
        borderRadius: 12,
        padding: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
    },
    text2: {
        fontSize: 20,
    }
})