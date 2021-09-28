import React, { useContext } from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}

//custom global hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }