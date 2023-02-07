import React from 'react';
import { TableCell } from '@mui/material';

const TableCellLogo = ({ ticker }: { ticker: string }) => {
	return (
		<TableCell component='th' scope='row'>
			<img
				src={`${process.env.PUBLIC_URL}/${ticker}.svg`}
				style={{ objectFit: 'cover', width: '40px' }}
				alt={`${ticker} logo`}
				loading='lazy'
			/>
		</TableCell>
	);
};

export default TableCellLogo;
