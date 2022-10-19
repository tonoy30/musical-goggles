import {
	APP_LOAD,
	ARTICLE_PAGE_UNLOADED,
	ARTICLE_SUBMITTED,
	DASHBOARD_LOADED,
	DELETE_ARTICLE,
	EDITOR_PAGE_UNLOADED,
	HOME_PAGE_UNLOADED,
	LOGIN,
	LOGIN_PAGE_UNLOADED,
	LOGOUT,
	PROFILE_FAVORITES_PAGE_UNLOADED,
	PROFILE_PAGE_UNLOADED,
	REDIRECT,
	REGISTER,
	REGISTER_PAGE_UNLOADED,
	SETTINGS_PAGE_UNLOADED,
	SETTINGS_SAVED,
} from "../constants/actions.type";

const defaultState = {
	appName: "Conduit",
	token: null,
	viewChangeCounter: 0,
};

const CommonReducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case APP_LOAD:
			return {
				...state,
				token: action.token || null,
				appLoaded: true,
				currentUser: action.payload ? action.payload.user : null,
			};
		case REDIRECT:
			return { ...state, redirectTo: null };
		case LOGOUT:
			return {
				...state,
				redirectTo: "/signin",
				token: null,
				currentUser: null,
			};
		case ARTICLE_SUBMITTED:
			const redirectUrl = `/article/${action.payload.article.slug}`;
			return { ...state, redirectTo: redirectUrl };
		case SETTINGS_SAVED:
			return {
				...state,
				redirectTo: action.error ? null : "/dashboard",
				currentUser: action.error ? null : action.payload.displayname,
			};
		case LOGIN:
		case REGISTER:
			return {
				...state,
				redirectTo: action.error ? null : "/dashboard",
				token: action.error ? null : action.payload.token,
				currentUser: action.error ? null : action.payload.displayname,
			};
		case DELETE_ARTICLE:
			return { ...state, redirectTo: "/dashboard" };
		case ARTICLE_PAGE_UNLOADED:
		case EDITOR_PAGE_UNLOADED:
		case HOME_PAGE_UNLOADED:
		case PROFILE_PAGE_UNLOADED:
		case PROFILE_FAVORITES_PAGE_UNLOADED:
		case SETTINGS_PAGE_UNLOADED:
		case LOGIN_PAGE_UNLOADED:
		case REGISTER_PAGE_UNLOADED:
			return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
		case DASHBOARD_LOADED:
			return {
				...state,
				updown: action.payload[0],
			};
		default:
			return state;
	}
};
export default CommonReducer;
