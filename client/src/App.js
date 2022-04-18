import { useState, useEffect } from 'react';
// socket
import io from 'socket.io-client';

// components
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import TickerLabel from './components/TickerLabel';
// temp data [...]
// import { tempdata } from './temp/temdata';
// MUI Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const socket = io('http://localhost:4000');

const tickerColors = [
	'red',
	'cornflowerblue',
	'lightblue',
	'darkcyan',
	'orange',
	'darkgreen',
];

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		socket.on('connect', () => {
			console.log('connected');
			socket.emit('start');
		});
	}, []);

	socket.on('ticker', (data) => {
		setData(data);
	});

	console.log('data is:', data[0]);

	return (
		<div>
			<Navbar />
			<MainContainer>
				<h1>Hello darkness!</h1>
				<h4>You may be interested in</h4>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>TICKER</TableCell>
								<TableCell align="right">Price</TableCell>
								<TableCell align="right">Change</TableCell>
								<TableCell align="right">Dividend</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{data &&
								data.map((row, index) => (
									<TableRow
										key={index}
										sx={{
											'&:last-child td, &:last-child th':
												{
													border: 0,
												},
										}}
									>
										<TableCell component="th" scope="row">
											<TickerLabel
												color={tickerColors[index]}
											>
												{row.ticker}
											</TickerLabel>
										</TableCell>
										<TableCell align="right">
											{row.price}
										</TableCell>
										<TableCell align="right">
											{row.change}
										</TableCell>
										<TableCell align="right">
											{row.dividend}
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</MainContainer>
		</div>
	);
}

export default App;
