import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = [] as string[];

const listOfDeletedSlice = createSlice({
	name: 'listOfDeletedSlice',
	initialState,
	reducers: {
		addToDeletedList(state, action: PayloadAction<string>) {
			return (state = [...state, action.payload]);
		},
		restore(state) {
			return (state = []);
		},
	},
});

export const { addToDeletedList, restore } = listOfDeletedSlice.actions;

export default listOfDeletedSlice;
