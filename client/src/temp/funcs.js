import { tempdata } from './temdata';

// we show price, the real change of the price
const calcTheDiff = (tickerOld, tickerNew) => {
	const diff = tickerOld.price - tickerNew.price;
	return {
		ticker: tickerNew.ticker,
		price: tickerNew.price, // new price
		change: diff, // the difference between previous and the new price
		dividend: tickerNew.dividend,
	};
};

calcTheDiff(tempdata[0], tempdata[1]);
