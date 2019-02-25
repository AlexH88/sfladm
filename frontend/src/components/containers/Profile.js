import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUpdateUserAuth} from '../../actions/authActions';

class Profile extends Component{
	constructor(props) {
		super(props);

		var profile;

		if(typeof(this.props.profile) !== 'undefined'){
			profile = this.props.profile;
		} else {
			profile = JSON.parse(localStorage.getItem("dataUser"))
		}

		this.state = {
			id: profile._id,
			login: profile.login,
			firstname: profile.firstname,
			lastname: profile.lastname,
			position: profile.position,
			company: profile.company,
			email: profile.email,
			img: profile.img
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleBtnSave = this.handleBtnSave.bind(this);
		this.handleLoadLocalFile = this.handleLoadLocalFile.bind(this);
		this.handleBtnCancel = this.handleBtnCancel.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleBtnSave(event) {
		let token = localStorage.getItem("token");
		this.props.dispatch(fetchUpdateUserAuth(token, this.state.id, this.state));
		event.preventDefault();
	}

	handleBtnCancel() {
		console.log('CANCEL')
		console.log(this.state.img)
		console.log(typeof this.state.img)
	}

	handleLoadLocalFile(event) {
		const reader = new FileReader();
		const file = event.target.files[0];

		reader.onloadend = () => {
			console.log('ONLOADEND')
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

	render() {

		return (
			<div className="">
				<div className="row">
				<div className="col-lg-12">
					<h4 className="page-header">Edit Profile</h4>
				</div>

				<div className="col-md-4 col-sm-6 col-xs-12">
					<div className="text-center">
						<img src={this.state.img} className="avatar img-circle img-thumbnail" alt="avatar" />
{/* avatar
						<input type="file" className="text-center center-block well well-sm" />
*/}
					</div>
				</div>

				<div className="col-md-8 col-sm-6 col-xs-12 personal-info">
					<h3>Personal info</h3>
					<form className="form-horizontal">
						<div className="form-group">
							<label className="col-lg-3 control-label">First name:</label>
							<div className="col-lg-8">
								<input className="form-control" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
							</div>
						</div>
						<div className="form-group">
							<label className="col-lg-3 control-label">Last name:</label>
							<div className="col-lg-8">
								<input className="form-control" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
							</div>
						</div>
						<div className="form-group">
							<label className="col-lg-3 control-label">Company:</label>
							<div className="col-lg-8">
								<input className="form-control" type="text" name="company" value={this.state.company} onChange={this.handleChange} />
							</div>
						</div>
						<div className="form-group">
							<label className="col-lg-3 control-label">Position:</label>
							<div className="col-lg-8">
								<input className="form-control" type="text" name="position" value={this.state.position} onChange={this.handleChange} />
							</div>
						</div>
						<div className="form-group">
							<label className="col-lg-3 control-label">Email:</label>
							<div className="col-lg-8">
								<input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
							</div>
						</div>
						<div className="form-group">
							<label className="col-md-3 control-label">Login:</label>
							<div className="col-md-8">
								<input className="form-control" type="text" name="login" value={this.state.login} onChange={this.handleChange} />
							</div>
						</div>

						<div className="form-group">
							<label className="col-md-3 control-label">Avatar:</label>
							<div className="col-md-8">
								<input
									type="file"
									className="text-center center-block well well-sm"
									type="file"
									accept=".jpg, .jpeg, .png"
									onChange={this.handleLoadLocalFile}
								/>
							</div>
						</div>


						<div className="form-group">
							<label className="col-md-3 control-label"></label>
							<div className="col-md-8">
								<input className="btn btn-primary" value="Save Changes" type="button" onClick={this.handleBtnSave} />
								<span></span>
								<input className="btn btn-default" value="Cancel" type="reset" onClick={this.handleBtnCancel} />
							</div>
						</div>
					</form>
				</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		profile: state.auth.dataUser.data,
	}
}

export default connect(mapStateToProps)(Profile);