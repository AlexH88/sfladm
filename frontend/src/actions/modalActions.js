import actionTypes from '../constants/actionTypes';

export function showModalNewUser() {
	return {
		type: actionTypes.SHOW_MODAL_NEW_USER,
	}
}

export function showModalNewArticle() {
	return {
		type: actionTypes.SHOW_MODAL_NEW_ARTICLE,
	}
}

export function showModalDeleteUser(id) {
	return {
		type: actionTypes.SHOW_MODAL_DELETE_USER,
		currentIdUser: id
	}
}


export function showModalEditUser(id, dataUser) {
	return {
		type: actionTypes.SHOW_MODAL_EDIT_USER,
		currentIdUser: id,
		dataUser: dataUser
	}
}

export function hideModal() {
	return {
		type: actionTypes.HIDE_MODAL
	}
}