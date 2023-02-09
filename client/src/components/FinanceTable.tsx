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

const tableHeadList = [
	'Logo',
	'Ticker',
	'Exchange',
	'Price',
	'Change',
	'Change %',
	'Dividend',
	'Income',
	'Last trade time',
	'Delete',
];

export default function FinanceTable() {
	const data = useAppSelector<IListOfTickersItem[]>((state) => state.list);
	const listOfDelete = useAppSelector<string[]>(
		(state) => state.listOfDeleted
	);
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 750 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						{tableHeadList.map((el: string, index: number) => (
							<TableCell
								align={index > 1 ? 'right' : 'center'}
								key={el}
								sx={{ whiteSpace: 'nowrap' }}
							>
								{el}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.length > 0 &&
						data
							.filter((el: IListOfTickersItem) => {
								return !listOfDelete.includes(el.ticker);
							})
							.map((el: IListOfTickersItem) => (
								<FinanceTableRow data={el} key={el.ticker} />
							))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
