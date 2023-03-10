import React from 'react';
import { Box, TableCell } from '@mui/material';

type TFinanceTableCellChange = {
	info: string | number;
	icon: JSX.Element;
	color: string;
};

export default function FinanceTableCellChange({
	info,
	icon,
	color,
}: TFinanceTableCellChange) {
	return (
		<TableCell align='right'>
			<Box
				sx={{
					color: { color },
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'end',
				}}
			>
				{icon}
				{info}
			</Box>
		</TableCell>
	);
}
