import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    const Context = React.createContext();
    // Data alisverisi icin kullanilacak olan provider'dir. App dosyasinda sayfalarin arasinda veri alisverisi icin kullanilir.
    // Main component olan App.js dosyasinda kullanilir. Child componentler de buradan veri alisverisi yapabilirler.
    const Provider = ({ children }) => {
        // const [sampleArray, setSampleArray] = useState([ //     {title: 'ReactNative'}, //     {title: 'SwiftUI'} // ]);
        const [state, dispatch] = useReducer(reducer, initialState);
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        // actions objesindeki key'lerin degerleri alinir.  
        // actions sunun gibi bisey durumdundadir: actions == { addNewTask: (dispatch) => { return () => { dispatch({ type: 'ADD_TASK' }); } } }
        // 'daki key: addNewTask
        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };
    // Provider ve Context'i doner. 
    return { Context, Provider };
};
