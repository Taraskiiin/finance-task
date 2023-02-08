import React from 'react';
import { Box, TableCell } from '@mui/material';

export default function TableCellLogo({ ticker }: { ticker: string }) {
	return (
		<TableCell component='th' scope='row' align='center'>
			<Box
				component='img'
				sx={{ objectFit: 'cover', height: '20px' }}
				//@ts-ignore
				//added to avoid warning
				src={`${process.env.PUBLIC_URL}/${ticker}.svg`}
				alt={`${ticker} logo`}
				loading='lazy'
			/>
		</TableCell>
	);
}
