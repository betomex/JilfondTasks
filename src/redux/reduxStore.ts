import { configureStore } from '@reduxjs/toolkit';
import { indexReducer } from './slices';

export const store = configureStore({
  reducer: indexReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
  })
});

export type RootState = ReturnType<typeof store.getState>;
