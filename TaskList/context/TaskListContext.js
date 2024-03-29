import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// reducer, action objesini alir ve state'i update eder.
const taskReducer = (state, action) => {
    // action icerisindeki type'a gore islem yapar.
    switch (action.type) {
        // post request ile jsonserver'a gonderdigimiz icin artik bu kisim kullanilmayacak.
        // case 'ADD_TASK':
        //     return [...state, {
        //         // id olarak random bir sayi olusturulur.
        //         id: Math.floor(Math.random() * 99999),
        //         title: action.payload.title,
        //         content: action.payload.content,
        //     },
        //     ];
        case 'EDIT_TASK':
            return state.map((task) => {
                // id'ler esitse yeni editlenen task'i dondururuz.
                if (task.id === action.payload.id) {
                    return action.payload;
                } else {
                    // ayni kalmaya devam eder.
                    return task;
                }
            });
        case 'GET_TASKS':
            return action.payload;
        // delete request ile jsonserver'a gonderdigimiz icin artik bu kisim kullanilmayacak.
        case 'DELETE_TASK':
            //     // payload icerisindeki action'a task id esit degilse bunlari alir yeni bir array'e atariz, yani state'i  filtreleriz.
            return state.filter((task) => task.id !== action.payload);
        default:
            return state;
    }
};


const addNewTask = (dispatch) => {
    return async (title, content, callBackToMain) => {
        // useReducer kullanimi
        // objenin tipine gore islem yapar.
        // dispatch({ type: 'ADD_TASK', payload: { title, content } });

        // jsonserver'a post request atiyoruz. (backend'i update islemi)
        await jsonServer.post('/tasks', { title, content });

        // butona basildiktan sonra main view'e otomatik doner.
        if (callBackToMain) {
            callBackToMain();
        }
        // useState kullanimi 
        // setSampleArray([...sampleArray, {title: 'newTask'}]);
    };
};

const editTask = (dispatch) => {
    return (id, title, content, callBackToMain) => {
        // jsonserver'a put request atiyoruz. (backend'i update islemi)
        jsonServer.put(`/tasks/${id}`, { title, content });

        // useReducer kullanimi
        // objenin tipine gore islem yapar. (ui'i update islemi))
        dispatch({ type: 'EDIT_TASK', payload: { id, title, content } });
        // butona basildiktan sonra main view'e otomatik doner.
        if (callBackToMain) {
            callBackToMain();
        }
        // useState kullanimi 
        // setSampleArray([...sampleArray, {title: 'newTask'}]);
    };
};

const getTasks = (dispatch) => {
    return async () => {
        // jsonserver ile istek attik, get keyword'u axios'dan gelir.
        const response = await jsonServer.get('/tasks');
        dispatch({ type: 'GET_TASKS', payload: response.data });
    };
};

// main view'deki delete islemini id parametresine gore yapariz.
const deleteTask = (dispatch) => {
    return async (id) => {
        // jsonserver'a delete request atiyoruz. (backend'i update islemi)
        await jsonServer.delete(`/tasks/${id}`);
        // useReduser'de id'i payload ile yollariz (ui'i update islemi))
        dispatch({ type: 'DELETE_TASK', payload: id });
    };
}
export const { Context, Provider } = createDataContext(
    taskReducer,
    { addNewTask, deleteTask, editTask, getTasks },
    []
);