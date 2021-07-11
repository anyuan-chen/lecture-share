import { createContext, userContext } from "react";

const AppContext = createContext();

export function AppWrapper({children}) {
    let sharedState = {auth: false}
    return (
        <AppContext.Provider value = {sharedState}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}