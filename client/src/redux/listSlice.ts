import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IListOfTickersItem from '../interfaces';

const initialState = [] as IListOfTickersItem[];

const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setList(state, action: PayloadAction<IListOfTickersItem[]>) {
			return (state = [...action.payload]);
		},
	},
});

export const { setList } = listSlice.actions;

export default listSlice;
