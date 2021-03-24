import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import { localStorageMiddleware, promiseMiddleware } from "./middleware";
import createRootReducer from "./reducers";

export const browserHistory = createBrowserHistory();
const myRouterMiddleware = routerMiddleware(browserHistory);

const getMiddleware = () => {
	if (process.env.NODE_ENV === "production") {
		return applyMiddleware(
			myRouterMiddleware,
			promiseMiddleware,
			localStorageMiddleware
		);
	} else {
		// Enable additional logging in non-production environments.
		return applyMiddleware(
			myRouterMiddleware,
			promiseMiddleware,
			localStorageMiddleware,
			createLogger()
		);
	}
};

export const store = createStore(
	createRootReducer(browserHistory),
	composeWithDevTools(getMiddleware())
);
