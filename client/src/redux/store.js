import { configureStore } from '@reduxjs/toolkit';

import filesReducer from './state/filesSlice';
import appReducer from './state/appSlice';

const store = configureStore({
    reducer: {
        app: appReducer,
        files: filesReducer,
    },
});

export default store;
