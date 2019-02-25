import constants from '../constants/actionTypes';

var retUser = JSON.parse(localStorage.getItem("dataUser"))
var token = localStorage.getItem("token")

var initialState = {
	loggedIn: retUser ? true : false,
	token: token ? token : '',
	dataUser: retUser ? retUser : {}
}

export default (state = initialState, action) => {

	var updated = Object.assign({}, state);

	switch(action.type) {
		case constants.USER_LOGGEDIN:
			updated['loggedIn'] = true;
			updated['dataUser'] = action.data;
			return updated;

		case constants.USER_REGISTERED:
			updated['loggedIn'] = true;
			updated['username'] = action.username;
			return updated;

		case constants.USER_LOGOUT:
			updated['loggedIn'] = false;
			updated['dataUser'] = {};
			return updated;

		case constants.USER_AUTH_UPDATE:
			updated['loggedIn'] = true;
			updated['dataUser'] = action.data;
			return updated;

		case constants.USER_AUTH_UPDATE_ERROR:
			updated['loggedIn'] = false;
			updated['error'] = action.error;
			return updated;

		default:
			return state;
	}
}