import * as TYPES from "../constants/actions.type";

const INITIAL_STATE = {
	count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPES.INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case TYPES.DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};

		default:
			return state;
	}
};

export default reducer;
