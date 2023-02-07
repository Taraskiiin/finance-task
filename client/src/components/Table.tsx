import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useAppSelector } from '../hooks/reduxHooks';
import IListOfTickersItem from '../interfaces';

export default function FinanceTable() {
	const data = useAppSelector<IListOfTickersItem[]>((state) => state.list);
	console.log(data);
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
						<TableCell align='right'>Yield</TableCell>
						<TableCell align='right'>
							Last&nbsp;trade&nbsp;time
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.length > 0 &&
						data.map((el: IListOfTickersItem) => (
							<TableRow
								key={el.ticker}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{el.ticker}
								</TableCell>
								<TableCell align='right'>
									{el.exchange}
								</TableCell>
								<TableCell align='right'>{el.price}</TableCell>
								<TableCell align='right'>{el.change}</TableCell>
								<TableCell align='right'>
									{el.change_percent}
								</TableCell>
								<TableCell align='right'>
									{el.dividend}
								</TableCell>
								<TableCell align='right'>{el.yield}</TableCell>
								<TableCell align='right'>
									{el.last_trade_time}
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
