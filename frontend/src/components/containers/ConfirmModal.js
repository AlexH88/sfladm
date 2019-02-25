import React, {Component} from 'react';
import {connect} from 'react-redux';

import ModalNewUser from '../modals/ModalNewUser';
import ModalNewArticle from '../modals/ModalNewArticle';

class ConfirmModal extends Component {
	render() {
		let { isShowing, typeModal} = this.props

		if(isShowing && typeModal === 'newuser') {
			return (
				<ModalNewUser />
			)
		} else if (isShowing && typeModal === 'newarticle') {
			return (
				<ModalNewArticle />
			)
		} else {
			return null;
		}
	}
}

const mapStateToProps = state => {
	return {
		isShowing: state.modal.isShowing,
		typeModal: state.modal.typeModal
	}
}

export default connect(mapStateToProps)(ConfirmModal);