import React from 'react';
import TableCell from '@mui/material/TableCell';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { format } from 'date-fns';

import FinanceTableCellChange from './FinanceTableCellChange';

type TFinanceTableCell = {
	name: string;
	info: string | number;
	isProfit: boolean;
};

export default function FinanceTableCell({
	name,
	info,
	isProfit,
}: TFinanceTableCell) {
	if (name === 'change' && isProfit) {
		return (
			<FinanceTableCellChange
				info={info}
				icon={<AddIcon fontSize='small' />}
				color='#a2c11c'
			/>
		);
	}

	if (name === 'change' && !isProfit) {
		return (
			<FinanceTableCellChange
				info={info}
				icon={<RemoveIcon fontSize='small' />}
				color='red'
			/>
		);
	}

	if (name === 'change_percent' && isProfit) {
		return (
			<FinanceTableCellChange
				info={info}
				icon={<ArrowUpwardIcon fontSize='small' />}
				color='#a2c11c'
			/>
		);
	}

	if (name === 'change_percent' && !isProfit) {
		return (
			<FinanceTableCellChange
				info={info}
				icon={<ArrowDownwardIcon fontSize='small' />}
				color='red'
			/>
		);
	}

	if (name === 'last_trade_time') {
		return (
			<TableCell>
				{format(new Date(info), 'EEEE d/LLL/yyyy k:m')}
			</TableCell>
		);
	}

	return <TableCell>{info}</TableCell>;
}
