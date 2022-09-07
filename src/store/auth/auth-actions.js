import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth'

export const AUTH_USER = 'AUTH_USER'

const authUser = (user) => ({
	type: AUTH_USER,
	payload: {...user},
})

export const onAuthFunction = (email, password , setError) => (dispatch, getState, object) => {
	signInWithEmailAndPassword(object?.auth, email, password)
		.then(res =>
			dispatch(
				authUser(res?.user)
			)
		)
		.catch(() => {
			setError(true)
		})
}

export const createNewUser = (email, password) => (dispatch, getState, object) => {
	createUserWithEmailAndPassword(object?.auth, email, password)
		.then(res =>
			dispatch(
				authUser(res?.user)
			)
		)
}

export const getInfoUsers = () => (dispatch, getState, object) => {
	onAuthStateChanged(object?.auth, user => {
		if (user) {
			dispatch(authUser(user))
		} else {
			dispatch(authUser([]))
		}
	})
}