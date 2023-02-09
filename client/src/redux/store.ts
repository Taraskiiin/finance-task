import {
	configureStore,
	ThunkAction,
	Action,
	combineReducers,
} from '@reduxjs/toolkit';

import listOfDeletedSlice from './listOfDeletedSlice';
import listSlice from './listSlice';

const rootReducer = combineReducers({
	list: listSlice.reducer,
	listOfDeleted: listOfDeletedSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
