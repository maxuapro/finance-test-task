import { tempdata } from '../temp/temdata';

const initState = {
	data: [...tempdata],
	fineData: [],
};
export const dataReducer = (state = initState, action) => {
	switch (action.type) {
		case 'NEW_DATA':
			return action.payload;

		default:
			return state;
	}
};
