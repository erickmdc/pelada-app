import { configureStore } from '@reduxjs/toolkit';
import partidaReducer from './partidaSlice';

export const store = configureStore({
  reducer: {
    partida: partidaReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;