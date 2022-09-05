import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from '@redux-devtools/extension'
import thunk from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import {rootReducers} from "./rootReducers";
import instance from "../api";
import {auth} from "../firebase";

const rootConfigure = {
	key: 'root',
	storage,
	blacklist: ['auth'],
}

const persistedReducers = persistReducer(rootConfigure, rootReducers)

const store = createStore(
	persistedReducers,
	composeWithDevTools(
		applyMiddleware(thunk.withExtraArgument({instance, auth}))
	)
)

export const persistons = persistStore(store)
export {store}