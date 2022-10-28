import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const increaseByAmount = createAction('counter/increaseByAmount');

// Initial Value
const initialState = {
    value:0
}

// Create Reducers using Builder Callback Notation
// export const counterSlices = createReducer(initialState, (builder) => {
//     builder.addCase(increment, (state, action) => {
//         state.value++;
//     });
//     builder.addCase(decrement, (state, action) => {
//         state.value--;
//     });
//     builder.addCase(increaseByAmount, (state, action) => {
//         state.value += action.payload;
//     });
// })

// Create Reducers using Map Object Notation
export const counterSlices = createReducer(initialState, {
    [increment]: (state, action) => {
        state.value++;
    },
    [decrement]: (state, action) => {
        state.value--;
    },
    [increaseByAmount]: (state, action) => {
        state.value += action.payload;
    }
});