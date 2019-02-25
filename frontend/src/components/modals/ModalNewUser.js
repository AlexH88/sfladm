import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modalActions';
import {createUser} from '../../actions/userActions';

class ModalNewUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			position: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleBtnSave = this.handleBtnSave.bind(this);
		this.handleBtnCancel = this.handleBtnCancel.bind(this);
	}

	handleBtnSave(event) {
		if((this.state.firstname === '')||(this.state.lastname === '')||(this.state.position === '')) {
			alert('Заполните все поля!')
		} else {
			this.props.dispatch(createUser(this.state));
			this.props.dispatch(hideModal());
		}

		event.preventDefault();
	}

	handleBtnCancel(event) {
		this.props.dispatch(hideModal());
		event.preventDefault();
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	render() {
		return (
			<div className="confirm-modal">
				<form>
					<div className="modal-backdrop"></div>

					<div className="confirm-modal-content">
						<div className="form-group">
							<label>Firstname</label>
							<input type="text" className="form-control" id="modal-firstname" placeholder="firstname" name="firstname" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label>Lastname</label>
							<input type="text" className="form-control" id="modal-lastname" placeholder="lastname" name="lastname" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label>Position</label>
							<input type="text" className="form-control" id="modal-position" placeholder="position" name="position" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label>Login</label>
							<input type="text" className="form-control" id="modal-login" placeholder="login" name="login" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="text" className="form-control" id="modal-password" placeholder="password" name="password" onChange={this.handleChange} />
						</div>
						<div className="btn-group">
							<button type="submit" className="btn btn-primary" onClick={this.handleBtnSave}>Save</button>
							<button type="submit" className="btn btn-primary" onClick={this.handleBtnCancel}>Cancel</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isShowing: state.modal.isShowing,
		typeModal: state.modal.typeModal
	}
}

export default connect(mapStateToProps)(ModalNewUser);