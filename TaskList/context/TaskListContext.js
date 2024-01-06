import React from 'react';
// import { useState } from 'react';
import { useReducer } from 'react';

// TaskListContext'i data transferi yapmak icin kullandik.
const TaskListContext = React.createContext();
const taskReducer = (state, action) => {
    // action icerisindeki type'a gore islem yapar.
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {title: 'NEW TASK ADDED'}];
        default:
            return state;
    }
}

// Data alisverisi icin kullanilacak olan provider'dir. App dosyasinda sayfalarin arasinda veri alisverisi icin kullanilir.
// Main component olan App.js dosyasinda kullanilir. Child componentler de buradan veri alisverisi yapabilirler.
export const TaskListProvider = ({ children }) => {
    // const [sampleArray, setSampleArray] = useState([ //     {title: 'ReactNative'}, //     {title: 'SwiftUI'} // ]);
    const [sampleArray, dispatch] = useReducer(taskReducer, [{title: 'ReactNative'}, {title: 'SwiftUI'}]);

    const addNewTask = () => {
        // useReducer kullanimi
        // objenin tipine gore islem yapar.
        dispatch({type: 'ADD_TASK'}); 
        // useState kullanimi 
        // setSampleArray([...sampleArray, {title: 'newTask'}]);
    };
    return (
        <TaskListContext.Provider value={{data: sampleArray, addNewTask}}>
        {children}
        </TaskListContext.Provider>
    );
};

export default TaskListContext;