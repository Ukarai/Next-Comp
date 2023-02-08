import { createContext, useContext } from "react";

const CurrentEventContext = createContext(-1);

export function CurrentEventWrapper({ children }: any) {
    let currentEventId = -1;

    return (
        <CurrentEventContext.Provider value={currentEventId}>
            {children}
        </CurrentEventContext.Provider>
    )
}

export function useCurrentEventContext() {
    return useContext(CurrentEventContext);
}