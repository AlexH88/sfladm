import actionTypes from '../constants/actionTypes';

const url = 'http://localhost:3000/api';

export function createUser(data) {
	return dispatch => {
		return fetch(`${url}/signup`,{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then( (response) => response.json() )
			.then( (data) => {
				dispatch(createUserItem(data))
			})
			.catch( (err) => dispatch(fetchCreateUserError(err)) );
	}
}

export const createUserItem = user => {
	return {
		type: actionTypes.USER_ITEM_CREATED,
		newUser: user
	}
}

export const fetchCreateUserError = err => ({
	type: actionTypes.FETCH_CREATE_USER_ERROR,
	error: err
});

export function fetchUsers(token) {
	return dispatch => {
		return fetch(`${url}/users`,{
			method: 'GET',
			headers: {
				'authorization': token
			}
		})
		.then( (response) => response.json() )
		.then( (data) => dispatch(fetchUsersSuccess(data.users)))
		.catch( (err) => dispatch(fetchUsersError(err)) );
	}
}

export const fetchUsersSuccess = users => ({
	type: actionTypes.FETCH_ALL_USERS,
	users: users
});

export const fetchUsersError = err => ({
	type: actionTypes.FETCH_ALL_USERS_ERROR,
	error: err
});

export function fetchUserItem(token, id) {
	return dispatch => {
		return fetch(`${url}/users/${id}`,{
				method: 'GET',
				headers: {
					'authorization': token
				}
			})
			.then( (response) => response.json() )
			.then( (data) => dispatch(userItemReceived(data.user[0])))
			.catch( (err) => dispatch(fetchUserItemError(err)) );
	}
}

export const userItemReceived = userItem => {
	return {
		type: actionTypes.USER_ITEM_RECEIVED,
		userItem: userItem
	}
}

export const fetchUserItemError = err => ({
	type: actionTypes.FETCH_USER_ITEM_ERROR,
	error: err
});

/*
export function fetchUpdateUser(token, id, data) {
	return dispatch => {
		return fetch(`${url}/user/${id}`,{
				method: 'PUT',
				body: JSON.stringify(data),
				headers: {
					'authorization': token,
					'Content-Type': 'application/json'
				}
			})
			.then( (response) => response.json() )
			.then( (data) => {
				dispatch(userUpdated(data));
			})
			.catch( (err) => dispatch(fetchUpdateUserError(err)) );
	}
}

export const userUpdated = user => {
	return {
		type: actionTypes.USER_UPDATE,
		user: user
	}
}

export const fetchUpdateUserError = err => ({
	type: actionTypes.USER_UPDATE_ERROR,
	error: err
});
*/