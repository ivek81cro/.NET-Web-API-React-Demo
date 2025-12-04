import { createSlice } from "@reduxjs/toolkit/react";

export type CounterState = {
    data: number;
}

const initialState: CounterState = {
    data: 42
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload;
        },
        decrement: (state, action) => {
            state.data -= action.payload;
        }
    }
})

export const { increment, decrement } = counterSlice.actions;


// Legacy reducer and action creators
export function incrementLegacy(ammount = 1) {
    return {
        type: 'increment' as const,
        payload: ammount
    }
}

export function decrementLegacy(ammount = 1) {
    return {
        type: 'decrement' as const,
        payload: ammount
    }
}

export function counterReducer(state = initialState, action: {type: string, payload: number}): CounterState {
    switch(action.type) {
        case 'increment':
            return { 
                ...state, 
                data: state.data + action.payload};
        case 'decrement':
            return { 
                ...state, 
                data: state.data - action.payload};
        default:
            return state;
    }
}