import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
};

const counterSlices = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state, action) => {
            state.value++;
        },
        decrement : (state, action) => {
            state.value--;
        },
        increaseByAmount : (state, action) => {
            state.value += action.payload;
        },
    }
});

// Export Actions from slice
export const { increment, decrement, increaseByAmount } = counterSlices.actions;

// Export Reducer
export default counterSlices.reducer;