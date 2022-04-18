import { Box } from '@mui/material';

const TickerLabel = ({ color, children }) => {
	return (
		<Box
			padding={0.3}
			borderRadius={1}
			backgroundColor={color}
			margin={0}
			width="60px"
			textAlign="center"
			color="white"
		>
			{children}
		</Box>
	);
};

export default TickerLabel;
