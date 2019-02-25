import constants from '../constants/actionTypes';

var initialState = {
	users: [],
	userItem: {},
	newUser: {},
	loading: false,
	error: null
}

export default (state = initialState, action) => {

	var update = Object.assign({}, state);

	switch(action.type) {

		case constants.USER_CREATED:
			update['loading'] = false;
			update['newUser'] = action.user;
			return update;

		case constants.USER_CREATED_ERROR:
			update['loading'] = false;
			update['error'] = action.error;
			return update;

		case constants.FETCH_ALL_USERS:
			update['loading'] = true;
			update['users'] = action.users;
			return update;

		case constants.FETCH_ALL_USERS_ERROR:
			update['loading'] = false;
			update['error'] = action.error;
			update['users'] = [];
			return update;

		case constants.USER_ITEM_RECEIVED:
			update['userItem'] = action.userItem;
			update['loading'] = true;
			return update;

		case constants.FETCH_USER_ITEM_ERROR:
			update['loading'] = false;
			update['error'] = action.error;
			update['userItem'] = {};
			return update;
/*
		case constants.USER_UPDATE:
			update['loading'] = false;
			update['error'] = '';
			return update;

		case constants.USER_UPDATE_ERROR:
			update['loading'] = false;
			update['error'] = action.error;
			return update;
*/

		default:
			return state;
	}
}