import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0, //keep track of count
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
});

// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: (arg0: { payload: number; type: string; }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
