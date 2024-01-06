import React from 'react';

const TaskListContext = React.createContext({

});

export default TaskListContext;

// Data alisverisi icin kullanilacak olan provider'dir. App dosyasinda sayfalarin arasinda veri alisverisi icin kullanilir.
// Main component olan App.js dosyasinda kullanilir. Child componentler de buradan veri alisverisi yapabilirler.
export const TaskListProvider = ({ children }) => {
    return (
        <TaskListContext.Provider>
        {children}
        </TaskListContext.Provider>
    );
}
