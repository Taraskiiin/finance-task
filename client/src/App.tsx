import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { useAppSelector } from './hooks/reduxHooks';
import useSocketConnection from './hooks/useSocketConnection';
import IListOfTickersItem from './interfaces';

import CardElement from './components/CardElement';

const Root = styled(Container)(({ theme }) => ({
	padding: theme.spacing(10),
	textAlign: 'center',
}));

function App() {
	useSocketConnection();
	const data = useAppSelector<any>((state) => state.list);
	return (
		<Root maxWidth='sm'>
			<Paper elevation={3}>
				{data.length > 0 &&
					data.map((el: IListOfTickersItem) => (
						<CardElement data={el} />
					))}
			</Paper>
		</Root>
	);
}

export default App;
