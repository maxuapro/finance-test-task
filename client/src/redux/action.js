import store from './store';

const calcTheDiff = (tickerOld, tickerNew) => {
	const diff = tickerOld.price - tickerNew.price;
	return {
		ticker: tickerNew.ticker,
		price: tickerNew.price, // new price
		change: diff.toFixed(2), // the difference between previous and the new price
		dividend: tickerNew.dividend,
	};
};

export const anotherDataPortion = (data) => {
	const oldData = store.getState();

	const calculatedFineData = data.map((ticker, index) =>
		calcTheDiff(oldData.data[index], ticker)
	);

	return {
		type: 'NEW_DATA',
		payload: {
			data: data, // that's where I think I save new data..  I don't ((
			fineData: [...calculatedFineData],
		},
	};
};
