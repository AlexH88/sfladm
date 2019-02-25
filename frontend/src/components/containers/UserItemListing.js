import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class UserItemListing extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div className="block-avatar">
					<img src={this.props.data.img} className="users-avatar-item" alt="avatar" />
				</div>
				<div className="block-avatar-description">
					<Link key={this.props.data._id} to={`/user/${this.props.data._id}`} ><b>{this.props.data.firstname}</b></Link>
					<br/>
					{`${this.props.data.firstname} ${this.props.data.lastname}`}
				</div>
			</div>
		);
	}
}

export default UserItemListing;