import React from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import TableCellLogo from './TableCellLogo';
import Btn from './Btn';
import FinanceTableCell from './FinanceTableCell';

import { checkProfit } from '../utils/checkProfit';
import { useAppDispatch } from '../hooks/reduxHooks';
import { addToDeletedList } from '../redux/listOfDeletedSlice';
import IListOfTickersItem from '../interfaces';

export default function FinanceTableRow({
	data,
}: {
	data: IListOfTickersItem;
}) {
	const dispatch = useAppDispatch();
	const { ticker, price, change } = data;

	const arrayOfData = Object.entries(data);
	const isProfit = checkProfit(price, change);

	function handleDeleteRow(name: string) {
		dispatch(addToDeletedList(name));
	}

	return (
		<TableRow
			sx={{
				'&:last-child td, &:last-child th': {
					border: 0,
				},
			}}
		>
			<TableCellLogo ticker={ticker} />

			{arrayOfData.length > 0 &&
				arrayOfData.map((el: string[]) => (
					<FinanceTableCell
						key={el[0]}
						name={el[0]}
						info={el[1]}
						isProfit={isProfit}
					/>
				))}
			<TableCell align='right'>
				<Btn
					icon={<DeleteForeverIcon fontSize='large' />}
					color={'red'}
					click={() => handleDeleteRow(ticker)}
				/>
			</TableCell>
		</TableRow>
	);
}
