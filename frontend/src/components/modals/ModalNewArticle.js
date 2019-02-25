import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hideModal} from '../../actions/modalActions';
import {createArticle} from '../../actions/articleActions';

class ModalNewUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			teaser: '',
			body: '',
			img: ''
		}

		this.handleLoadLocalFile = this.handleLoadLocalFile.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBtnSave = this.handleBtnSave.bind(this);
		this.handleBtnCancel = this.handleBtnCancel.bind(this);
	}

	handleLoadLocalFile(event) {
		const reader = new FileReader();
		const file = event.target.files[0];

		reader.onloadend = () => {
			this.setState({
				img: reader.result
			});
		}

		if (file) {
			reader.readAsDataURL(file);

		} else {
			console.log('ERROR')
		}
		event.preventDefault();
	}

	handleBtnSave(event) {
		if((this.state.title === '')||(this.state.teaser === '')||(this.state.body === '')) {
			alert('Заполните все поля!')
		} else {
			let token = localStorage.getItem("token");
			this.props.dispatch(createArticle(token, this.state));
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
							<label>Заголовок статьи</label>
							<input type="text" className="form-control" id="modal-title" placeholder="Заголовок" name="title" onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<label>Описание</label>
							<textarea className="form-control" id="modal-teaser" name="teaser" rows="5" onChange={this.handleChange} ></textarea>
						</div>
						<div className="form-group">
							<label>Статья</label>
							<textarea className="form-control" id="modal-body" name="body" rows="8" onChange={this.handleChange} ></textarea>
						</div>
						<div className="form-group">
							<input
								type="file"
								className="text-center center-block well well-sm"
								type="file"
								accept=".jpg, .jpeg, .png"
								onChange={this.handleLoadLocalFile}
							/>
						</div>
						<div className="btn-group">
							<button type="submit" className="btn btn-primary" onClick={this.handleBtnSave}>Сохранить</button>
							<button type="submit" className="btn btn-primary" onClick={this.handleBtnCancel}>Отмена</button>
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