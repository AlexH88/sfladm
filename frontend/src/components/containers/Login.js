import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitLogin} from '../../actions/authActions';


class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	login(event){
		this.props.dispatch(submitLogin(this.state));
		event.preventDefault();
	}

	render() {
		return (
			<div id="login">
				<h3 className="text-center text-white pt-5">Login form</h3>
				<div className="container">
					<div id="login-row" className="row justify-content-center align-items-center">
						<div id="login-column" className="col-md-6">
							<div id="login-box" className="col-md-12">
								<form id="login-form" className="form">
									<h3 className="text-center text-info">Login</h3>
									<div className="form-group">
										<label className="text-info">Username:</label><br/>
										<input type="text" name="login" id="username" className="form-control" onChange={this.handleChange}/>
									</div>
									<div className="form-group">
										<label className="text-info">Password:</label><br/>
										<input type="text" name="password" id="password" className="form-control" onChange={this.handleChange}/>
									</div>
									<div className="form-group">
										<label className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
										<input type="submit" name="submit" className="btn btn-info btn-md" value="submit" onClick={this.login} />
									</div>
									<div id="register-link" className="text-right">
										<a href="#" className="text-info">Register here</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
	}
}

export default connect(mapStateToProps)(Login);