import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserItem} from '../../actions/userActions';

class UserItem extends Component {

	async componentDidMount() {
		let token = localStorage.getItem("token");
		await this.props.dispatch(fetchUserItem(token, this.props.match.params.id));
	}

	async componentDidUpdate(prevProps) {
		let oldId = prevProps.match.params.id;
		let newId = this.props.match.params.id;
		if(newId !== oldId) {
			await this.props.dispatch(fetchUserItem(token, this.props.match.params.id));
		}
	}

	render() {

		return (
			<div className="">
			{this.props.loading ?

				<div className="row">
					<div className="col-lg-12">
						<h4 className="page-header">User Profile</h4>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12">
						<div className="text-center">
							<img src={this.props.userItem.img} className="avatar img-circle img-thumbnail" alt="avatar" />
						</div>
					</div>

					<div className="col-md-8 col-sm-6 col-xs-12 personal-info">
						<h3>Personal info</h3>
						<form className="form-horizontal">
							<div className="form-group">
								<label className="col-lg-3 control-label">First name:</label>
								<div className="col-lg-8">
									<input className="form-control" type="text" name="firstname" value={this.props.userItem.firstname} onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<label className="col-lg-3 control-label">Last name:</label>
								<div className="col-lg-8">
									<input className="form-control" type="text" name="lastname" value={this.props.userItem.lastname} onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<label className="col-lg-3 control-label">Company:</label>
								<div className="col-lg-8">
									<input className="form-control" type="text" name="company" value={this.props.userItem.company} onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<label className="col-lg-3 control-label">Position:</label>
								<div className="col-lg-8">
									<input className="form-control" type="text" name="position" value={this.props.userItem.position} onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<label className="col-lg-3 control-label">Email:</label>
								<div className="col-lg-8">
									<input className="form-control" type="text" name="email" value={this.props.userItem.email} onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<label className="col-md-3 control-label">Login:</label>
								<div className="col-md-8">
									<input className="form-control" type="text" name="login" value={this.props.userItem.login} onChange={this.handleChange} />
								</div>
							</div>
						</form>
					</div>
				</div>
			: <div>Loading</div>}
			</div>

		);
	}
}

const mapStateToProps = state => {
	return {
		userItem: state.user.userItem,
		loading: state.user.loading
	}
}

export default connect(mapStateToProps)(UserItem);
