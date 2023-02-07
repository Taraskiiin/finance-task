import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import useSocketConnection from './hooks/useSocketConnection';

import FinanceTable from './components/FinanceTable';

const Root = styled(Container)(({ theme }) => ({
	padding: theme.spacing(10),
	textAlign: 'center',
}));

function App() {
	useSocketConnection();
	return (
		<Root maxWidth='md'>
			<Paper elevation={3}>
				<FinanceTable />
			</Paper>
		</Root>
	);
}

export default App;
