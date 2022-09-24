import { createContext } from "react";
import { StateActions } from "./actions";

export interface InitialState {
    baseCurrency: string,
    secondCurrency: string,
    pair: string,
    mode: "light" | "dark"
}

export const initialState: InitialState = {
    baseCurrency: '',
    secondCurrency: '',
    pair: '',
    mode: "dark"
}

export const BaseContext = createContext<{ state: InitialState, dispatch: React.Dispatch<StateActions> }>({
    state: initialState,
    dispatch: () => null
});