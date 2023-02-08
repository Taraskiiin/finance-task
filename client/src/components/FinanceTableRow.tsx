import React from 'react';
import TableRow from '@mui/material/TableRow';

import IListOfTickersItem from '../interfaces';
import TableCellLogo from './TableCellLogo';
import FinanceTableCell from './FinanceTableCell';
import { checkProfit } from '../utils/checkProfit';

export default function FinanceTableRow({
	data,
}: {
	data: IListOfTickersItem;
}) {
	const { ticker, price, change } = data;

	const arrayOfData = Object.entries(data);
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

			{arrayOfData.length > 0 &&
				arrayOfData.map((el: any, index: number) => (
					<FinanceTableCell
						key={el[0]}
						name={el[0]}
						info={el[1]}
						isProfit={isProfit}
					/>
				))}
		</TableRow>
	);
}
