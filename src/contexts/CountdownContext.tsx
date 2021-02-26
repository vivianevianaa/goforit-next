import { createContext, ReactNode } from "react";

interface CountdownContext {

}

interface CountdownProviderProps {
    children: ReactNode;
}

const CountdownContext = createContext({  } as CountdownContext);


export function CountdownProvider({ children }: CountdownProviderProps) {

    
    return (
        <CountdownContext.Provider>
            {children}
        </CountdownContext.Provider>
    );
}



