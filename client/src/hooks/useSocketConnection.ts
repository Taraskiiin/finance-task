import { useEffect } from 'react';
import { setList } from '../redux/listSlice';

import IListOfTickersItem from '../interfaces';
import socket from '../socket';
import { useAppDispatch } from './reduxHooks';

const useSocketConnection = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.emit('start').on('ticker', (payload: IListOfTickersItem[]) => {
			dispatch(setList(payload));
		});
	}, []);
};

export default useSocketConnection;
