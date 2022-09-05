import {combineReducers} from "redux";
import {filtersReducers} from "./filters/filters-reducers";
import {authReducers} from "./auth/auth-reducers";

export const rootReducers = combineReducers({
	filters: filtersReducers,
	auth: authReducers,
})