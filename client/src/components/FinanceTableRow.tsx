import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { format } from 'date-fns';

import IListOfTickersItem from '../interfaces';
import TableCellLogo from './TableCellLogo';

export default function FinanceTableRow({
	data,
}: {
	data: IListOfTickersItem;
}) {
	const {
		ticker,
		exchange,
		price,
		change,
		change_percent,
		dividend,
		income,
		last_trade_time,
	} = data;

	return (
		<TableRow
			sx={{
				'&:last-child td, &:last-child th': {
					border: 0,
				},
			}}
		>
			<TableCell component='th' scope='row'>
				{ticker}
			</TableCell>
			<TableCellLogo ticker={ticker} />
			<TableCell align='right'>{exchange}</TableCell>
			<TableCell align='right'>{price}</TableCell>
			<TableCell align='right'>{change}</TableCell>
			<TableCell align='right'>{change_percent}</TableCell>
			<TableCell align='right'>{dividend}</TableCell>
			<TableCell align='right'>{income}</TableCell>
			<TableCell align='right'>
				{format(new Date(last_trade_time), 'EEEE d/LLL/yyyy k:m')}
			</TableCell>
		</TableRow>
	);
}
