import React, { useState, useReducer } from 'react';
import createDataContext from './createDataContext';

const taskReducer = (state, action) => {
    // action icerisindeki type'a gore islem yapar.
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { title: 'NEW TASK ADDED' }];
        default:
            return state;
    }
};


const addNewTask = (dispatch) => {
    return () => {
        // useReducer kullanimi
        // objenin tipine gore islem yapar.
        dispatch({ type: 'ADD_TASK' });
        // useState kullanimi 
        // setSampleArray([...sampleArray, {title: 'newTask'}]);
    };
};

export const { Context, Provider } = createDataContext(
    taskReducer,
    { addNewTask }, []
);
