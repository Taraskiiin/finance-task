import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import useSocketConnection from './hooks/useSocketConnection';
import FinanceTable from './components/FinanceTable';

function App() {
	useSocketConnection();
	return (
		<Container
			maxWidth='lg'
			sx={{ paddingTop: '40px', textAlign: 'center' }}
		>
			<Paper elevation={3}>
				<FinanceTable />
			</Paper>
		</Container>
	);
}

export default App;
