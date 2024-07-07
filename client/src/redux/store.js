import { configureStore } from '@reduxjs/toolkit';

import filesReducer from './state/filesSlice.js';
import appReducer from './state/appSlice.js';

const store = configureStore({
    reducer: {
        app: appReducer,
        files: filesReducer,
    },
});

export default store;
