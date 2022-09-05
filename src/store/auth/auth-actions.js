import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

export const AUTH_USER = 'AUTH_USER'

const authUser = (user) => ({
	type: AUTH_USER,
	payload: user,
})

export const onAuthFunction = (email, password) => (dispatch, getState, object) => {
	signInWithEmailAndPassword(object?.auth, email, password)
		.then(res =>
			dispatch(
				authUser({...res.user})
			)
		)
}

export const createNewUser = (email, password) => (dispatch, getState, object) => {
	createUserWithEmailAndPassword(object?.auth, email, password)
		.then(res =>
			dispatch(
				authUser({...res.user})
			)
		)
}