import {AUTH_USER} from "./auth-actions";

export const authReducers = (state = [] , action) => {
	switch (action.type){
		case AUTH_USER: {
			return action.payload
		}
		default: {
			return state
		}
	}
}