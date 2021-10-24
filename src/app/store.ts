import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import faciltyReducer from '../store/facility-slice/facilitySlice';

export const store = configureStore({
    reducer: {
        facility: faciltyReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
