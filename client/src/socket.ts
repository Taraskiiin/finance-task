import io from 'socket.io-client';

const socket = io(
	`${process.env.REACT_APP_API_URL_DEPLOY || process.env.REACT_APP_API_URL}`,
	{
		query: {
			headers: { 'User-Agent': 'Test task' },
		},
	}
);

export default socket;
