import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import useSocketConnection from './hooks/useSocketConnection';
import FinanceTable from './components/FinanceTable';
import Btn from './components/Btn';

import { useAppDispatch } from './hooks/reduxHooks';
import { restore } from './redux/listOfDeletedSlice';

function App() {
	useSocketConnection();

	const dispatch = useAppDispatch();

	function handleClickReset() {
		dispatch(restore());
	}

	return (
		<Container
			maxWidth='lg'
			sx={{
				paddingTop: '40px',
				textAlign: 'center',
				position: 'relative',
			}}
		>
			<Paper elevation={3}>
				<FinanceTable />
			</Paper>
			<Box
				sx={{
					position: 'absolute',
					left: '100%',
					bottom: '15px',
				}}
			>
				<Btn
					icon={<RestartAltIcon fontSize='large' />}
					color={'blue'}
					click={handleClickReset}
				/>
			</Box>
		</Container>
	);
}

export default App;
