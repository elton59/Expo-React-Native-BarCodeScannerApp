import React, { createContext, useState } from 'react';

export const MyContextsContext = createContext({
    name: '',
    value: null,
    setName: () => {},
    setValue: () => {}
})

function MyContextProvider({children}) {
    const [name, setName] = useState("")
    const [value, setValue] = useState(null)

    return (
        <MyContextsContext.Provider value={{name, setName, value, setValue}}>
            {children}
        </MyContextsContext.Provider>
    );
}

export default MyContextProvider;