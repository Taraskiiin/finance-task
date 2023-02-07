import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import { useAppSelector } from '../hooks/reduxHooks';
import IListOfTickersItem from '../interfaces';
import FinanceTableRow from './FinanceTableRow';

export default function FinanceTable() {
	const data = useAppSelector<IListOfTickersItem[]>((state) => state.list);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Ticker</TableCell>
						<TableCell align='right'>Exchange</TableCell>
						<TableCell align='right'>Price</TableCell>
						<TableCell align='right'>Change</TableCell>
						<TableCell align='right'>Change&nbsp;percent</TableCell>
						<TableCell align='right'>Dividend</TableCell>
						<TableCell align='right'>Income</TableCell>
						<TableCell align='right'>
							Last&nbsp;trade&nbsp;time
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.length > 0 &&
						data.map((el: IListOfTickersItem) => (
							<FinanceTableRow data={el} key={el.ticker} />
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
