import React from 'react';

import Box from '@mui/material/Box';

const MainContainer = ({ children }) => {
	return (
		<Box
			maxWidth="800px"
			margin="0 auto"
			padding={2}
			// border="1px solid black"
		>
			{children}
		</Box>
	);
};

export default MainContainer;
