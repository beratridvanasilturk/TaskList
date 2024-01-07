import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';
import { act } from 'react-test-renderer';

const taskReducer = (state, action) => {
    // action icerisindeki type'a gore islem yapar.
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { 
                // id olarak random bir sayi olusturulur.
                id: Math.floor(Math.random() * 99999) ,
                title: action.payload.title,
                content: action.payload.content }];

        case 'DELETE_TASK':
            // payload icerisindeki action'a task id esit degilse bunlari alir yeni bir array'e atariz, yani state'i  filtreleriz.
            return state.filter((task) => task.id !== action.payload);
                             
        default:
            return state;
    }
};


const addNewTask = (dispatch) => {
    return (title, content, callBackMain ) => {
        // useReducer kullanimi
        // objenin tipine gore islem yapar.
        dispatch({ type: 'ADD_TASK', payload: { title, content } });
        if (callBackMain) {
            callBackMain();
        }
        // useState kullanimi 
        // setSampleArray([...sampleArray, {title: 'newTask'}]);
    };
};

// main view'deki delete islemini id parametresine gore yapariz.
const deleteTask = (dispatch) => {
    return (id) => {
        // useReduser'de id'i payload ile yollariz
        dispatch({ type: 'DELETE_TASK', payload: id });
    };
}
export const { Context, Provider } = createDataContext(
    taskReducer,
    { addNewTask , deleteTask }, []
);
