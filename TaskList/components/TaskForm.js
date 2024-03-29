import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

// icerde onTappedSaveButton props'u oi input alanina veriyoruz.
// ayni secilde initialValues props'u da veriyoruz. Bunlari edit ekraninda textInputlari doldurmak icin kullanacagiz.
export default function TaskForm({ onTappedSaveButton, initialValues, isEditMode }) {
    const [title, setTitle] = useState(initialValues ? initialValues.title : '');
    const [content, setDetail] = useState(initialValues ? initialValues.content : '');
    return (
        <View style={styles.main}>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.textInput}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Detail:</Text>
            <TextInput
                style={styles.textInput}
                value={content}
                onChangeText={(text) => setDetail(text)}
            />
            <View style={styles.buttonView}>
                {isEditMode ? (
                    <Button
                        title="Update Task"
                        color={'white'}
                        // onTappedSaveButton props    
                        onPress={() => onTappedSaveButton(title, content)} />
                ) : (
                    <Button
                        title="Save Task"
                        color={'white'}
                        // onTappedSaveButton props    
                        onPress={() => onTappedSaveButton(title, content)} />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 10,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,

    },
    textInput: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    buttonView: {
        backgroundColor: 'green',
        borderRadius: 50,
        padding: 10,
        margin: 10,
        width: 150,
        alignSelf: 'center',
    },
})