import * as TYPES from "../constants/actions.type";

export const increaseCounter = () => {
	return {
		type: TYPES.INCREMENT,
	};
};

export const decreaseCounter = () => {
	return {
		type: TYPES.DECREMENT,
	};
};
