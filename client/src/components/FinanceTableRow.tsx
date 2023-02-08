import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { format } from 'date-fns';

import IListOfTickersItem from '../interfaces';
import TableCellLogo from './TableCellLogo';
import { checkProfit } from '../utils/checkProfit';

export default function FinanceTableRow({
	data,
}: {
	data: IListOfTickersItem;
}) {
	const { ticker, price, change, last_trade_time } = data;
	const dataArray = Object.values(data);

	const isProfit = checkProfit(price, change);

	return (
		<TableRow
			sx={{
				'&:last-child td, &:last-child th': {
					border: 0,
				},
			}}
		>
			<TableCellLogo ticker={ticker} />

			{dataArray.length > 0 &&
				dataArray.map((el: string | number, index: number) => (
					<TableCell
						align={index !== 0 ? 'right' : 'center'}
						sx={{
							whiteSpace: 'nowrap',
						}}
					>
						{index === dataArray.length - 1
							? format(
									new Date(last_trade_time),
									'EEEE d/LLL/yyyy k:m'
							  )
							: el}
					</TableCell>
				))}
		</TableRow>
	);
}
