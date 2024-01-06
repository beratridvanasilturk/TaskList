import React from 'react';

// TaskListContext'i data transferi yapmak icin kullandik.
const TaskListContext = React.createContext();

// Data alisverisi icin kullanilacak olan provider'dir. App dosyasinda sayfalarin arasinda veri alisverisi icin kullanilir.
// Main component olan App.js dosyasinda kullanilir. Child componentler de buradan veri alisverisi yapabilirler.
export const TaskListProvider = ({ children }) => {
    const sampleArray = [{title: 'ReactNative'}, {title: 'SwiftUI'}];
    return (
        <TaskListContext.Provider value={sampleArray}>
        {children}
        </TaskListContext.Provider>
    );
};

export default TaskListContext;