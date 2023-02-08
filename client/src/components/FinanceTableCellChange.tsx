import { Box, TableCell } from '@mui/material';
import React from 'react';

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
		<TableCell>
			<Box
				sx={{
					color: { color },
					display: 'flex',
					alignItems: 'center',
				}}
			>
				{icon}
				{info}
			</Box>
		</TableCell>
	);
}
