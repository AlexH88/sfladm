import actionTypes from '../constants/actionTypes';

const url = 'http://localhost:3000/api';

function userLoggedIn(data) {
	return {
		type: actionTypes.USER_LOGGEDIN,
		data: data
	}
}

function userRegistered(username) {
	return {
		type: actionTypes.USER_REGISTERED,
		username: username
	}
}

function logout() {
	return {
		type: actionTypes.USER_LOGOUT
	}
}

export function submitLogin(data){
	return dispatch => {
		return fetch(`${url}/signin`, {
				method: 'POST', 
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			.then( (response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then( (data) => {

				console.log('auth');
				console.log(data);

				let serialData = JSON.stringify(data.data);
				localStorage.setItem('dataUser', serialData);
				localStorage.setItem('token', data.token);
				dispatch(userLoggedIn(data));
			})
			.catch( (e) => console.log(e) );
	}
}

export function submitRegister(data){
	return dispatch => {
		return fetch(`${url}/user/`, { 
				method: 'POST', 
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data), 
				mode: 'cors'})
			.then( (response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then( (data) => {
				localStorage.setItem('username', data.data.username);
				localStorage.setItem('token', data.data.tokenID);
				dispatch(userLoggedIn(data.data.username));
			})
			.catch( (e) => console.log(e) );
	}
}

export function logoutUser() {
	return dispatch => {
		localStorage.removeItem('dataUser');
		localStorage.removeItem('token');
		dispatch(logout());
	}
}

export function fetchUpdateUserAuth(token, id, data) {
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
				let serialData = JSON.stringify(data);
				localStorage.setItem('dataUser', serialData);
				dispatch(userAuctUpdated(data));
			})
			.catch( (err) => dispatch(fetchUpdateUserAuchError(err)) );
	}
}

export const userAuctUpdated = data => {
	return {
		type: actionTypes.USER_AUTH_UPDATE,
		data: data
	}
}

export const fetchUpdateUserAuchError = err => ({
	type: actionTypes.USER_AUTH_UPDATE_ERROR,
	error: err
});

