import React from 'react';
import { Box } from '@mui/material';

type TBtn = {
	icon: JSX.Element;
	color: string;
	click: () => void;
};

export default function Btn({ icon, color, click }: TBtn) {
	return (
		<Box
			component='button'
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				color: { color },
				opacity: '0.6',
				background: '#fff',
				border: 'none',
				'&:hover': {
					opacity: '0.8',
				},
				'&:active': {
					opacity: '1',
				},
			}}
			onClick={click}
		>
			{icon}
		</Box>
	);
}
