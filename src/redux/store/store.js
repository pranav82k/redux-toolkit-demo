import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlices';
// import { counterSlices } from '../slices/counterSlicesUsingActionsAndReducers';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;