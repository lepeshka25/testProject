export const ADD_USERS = 'ADD_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'

const addUsers = (users) => ({
	type: ADD_USERS,
	payload: users,
})

const addUser = (user) => ({
	type: ADD_USER,
	payload: user,
})

const removeUser = (user) => ({
	type: REMOVE_USER,
	payload: user
})

export const getUsers = () => (dispatch , getState, object) => {
	object.instance.get('users')
		.then(users => dispatch(addUsers(users)))
}

export const addNewUser = () => (dispatch , _, object) => {
	object.instance.post('users')
		.then(user => dispatch(addUser(user)))
}

export const deleteUser = () => (dispatch , _, object) => {
	object.instance.put()
//	нужно понять как установить массив в firebase
}