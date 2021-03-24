import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth.reducer";
import common from "./common.reducer";
import counter from "./counter.reducer";

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		reducer: counter,
		common,
		auth,
	});

export default createRootReducer;
