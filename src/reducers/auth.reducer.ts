import {
	ASYNC_START,
	LOGIN,
	LOGIN_PAGE_UNLOADED,
	REGISTER,
	REGISTER_PAGE_UNLOADED,
	UPDATE_FIELD_AUTH,
} from "../constants/actions.type";

const AuthReducer = (state = {}, action: any) => {
	switch (action.type) {
		case LOGIN:
		case REGISTER:
			return {
				...state,
				inProgress: false,
				errors: action && action.error ? action.payload.errors : null,
			};
		case LOGIN_PAGE_UNLOADED:
		case REGISTER_PAGE_UNLOADED:
			return {};
		case ASYNC_START:
			if (action.subtype === LOGIN || action.subtype === REGISTER) {
				return { ...state, inProgress: true };
			}
			break;
		case UPDATE_FIELD_AUTH:
			return { ...state, [action.key]: action.value };
		default:
			return state;
	}

	return state;
};
export default AuthReducer;
