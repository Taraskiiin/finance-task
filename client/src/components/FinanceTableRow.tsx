import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { format } from 'date-fns';

import IListOfTickersItem from '../interfaces';
import TableCellLogo from './TableCellLogo';
import { checkProfit } from '../utils/checkProfit';

export default function FinanceTableRow({
	data,
}: {
	data: IListOfTickersItem;
}) {
	const { ticker, price, change, change_percent, last_trade_time } = data;
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
							color:
								(el === change && isProfit) ||
								(el === change_percent && isProfit)
									? 'green'
									: (el === change && !isProfit) ||
									  (el === change_percent && !isProfit)
									? 'red'
									: '',
						}}
					>
						{index === dataArray.length - 1 ? (
							format(
								new Date(last_trade_time),
								'EEEE d/LLL/yyyy k:m'
							)
						) : el === change && isProfit ? (
							<>
								<AddIcon fontSize='small' />
								{el}
							</>
						) : el === change && !isProfit ? (
							<>
								<RemoveIcon fontSize='small' />
								{el}
							</>
						) : el === change_percent && isProfit ? (
							<>
								<ArrowUpwardIcon fontSize='small' />
								{el}
							</>
						) : el === change_percent && !isProfit ? (
							<>
								<ArrowDownwardIcon fontSize='small' />
								{el}
							</>
						) : (
							el
						)}
					</TableCell>
				))}
		</TableRow>
	);
}
