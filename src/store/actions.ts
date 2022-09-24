export enum StateActionTypes {
    SET_BASE_CURRENCY = 'SET_BASE_CURRENCY',
    SET_SECOND_CURRENCY = 'SET_SECOND_CURRENCY',
    SET_PAIR = 'SET_PAIR',
    SET_THEME_MODE = "SET_THEME_MODE"
}

type SetBaseCurrency = {
    type: StateActionTypes.SET_BASE_CURRENCY,
    payload: string
}

type SetSecondCurrency = {
    type: StateActionTypes.SET_SECOND_CURRENCY,
    payload: string
}

type SetPair = {
    type: StateActionTypes.SET_PAIR,
    payload: string
}

type SetThemeMode = {
    type: StateActionTypes.SET_THEME_MODE,
    payload: string
}


export type StateActions = SetBaseCurrency | SetSecondCurrency | SetPair | SetThemeMode;