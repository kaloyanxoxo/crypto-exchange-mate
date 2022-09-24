import {FunctionComponent, ReactNode, useReducer} from "react";
import {reducer} from "./reducer";
import {BaseContext, initialState} from "./context";

export const BaseProvider: FunctionComponent<{ children?: ReactNode }> = ({children}: { children?: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <BaseContext.Provider value={{state, dispatch}}>
            {children}
        </BaseContext.Provider>);
}