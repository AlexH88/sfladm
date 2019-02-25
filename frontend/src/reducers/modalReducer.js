import constants from '../constants/actionTypes';

var initialState = {
	isShowing: false,
	typeModal: '',
	currentIdArticle: '',
	currentIdUser: '',
	dataArticle: {}
}

export default (state = initialState, action) => {
	var update = Object.assign({}, state);

	switch(action.type) {

		case constants.SHOW_MODAL_NEW_USER:
			update['isShowing'] = true;
			update['typeModal'] = 'newuser';
			return update

		case constants.SHOW_MODAL_NEW_ARTICLE:
			update['isShowing'] = true;
			update['typeModal'] = 'newarticle';
			return update

		case constants.SHOW_MODAL_DELETE_USER:
			update['isShowing'] = true;
			update['typeModal'] = 'deleteuser';
			update['currentIdUser'] = action.currentIdUser;
			return update

		case constants.SHOW_MODAL_EDIT_USER:
			update['isShowing'] = true;
			update['typeModal'] = 'edituser';
			update['currentIdUser'] = action.currentIdUser;
			update['dataUser'] = action.dataUser;
			return update

		case constants.HIDE_MODAL:
			update['isShowing'] = false;
			update['typeModal'] = '';
			return update

		default:
			return state
	}
}