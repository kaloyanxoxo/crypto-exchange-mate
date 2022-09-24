import {InitialState} from "./context";
import {StateActions, StateActionTypes} from "./actions";

export const reducer = (state: InitialState, action: StateActions): InitialState => {
    switch (action.type) {
        case StateActionTypes.SET_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: (action.payload as string),
                secondCurrency: state.secondCurrency,
                pair: '',
            };
        case StateActionTypes.SET_SECOND_CURRENCY:
            return {
                ...state,
                baseCurrency: state.baseCurrency,
                secondCurrency: (action.payload as string),
                pair: '',
            };
        case StateActionTypes.SET_PAIR:
            return {
                ...state,
                baseCurrency: '',
                secondCurrency: '',
                pair: (action.payload as string)
            };
        case StateActionTypes.SET_THEME_MODE:
            return {
                ...state,
                mode: action.payload as ( "light" | "dark" )
            }; 
        default:
            return state;
    }
}